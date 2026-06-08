import { readdir, unlink, stat } from 'node:fs/promises'
import { join, parse } from 'node:path'
import sharp from 'sharp'

const IMAGES_DIR = join(process.cwd(), 'public/images')

const LARGE_MAX = 2400
const DEFAULT_MAX = 1600

const LARGE_FILES = new Set([
  'hero-brand-wall',
  'story-brand-wall',
  'music-wall',
  'set-for-dinner',
  'gyros-merida',
])

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

async function convertFile(filename) {
  const inputPath = join(IMAGES_DIR, filename)
  const { name, ext } = parse(filename)
  const lowerExt = ext.toLowerCase()

  if (!['.jpg', '.jpeg', '.png'].includes(lowerExt)) return null

  const outputPath = join(IMAGES_DIR, `${name}.webp`)
  const maxSize = LARGE_FILES.has(name) ? LARGE_MAX : DEFAULT_MAX

  const beforeSize = (await stat(inputPath)).size
  const image = sharp(inputPath)
  const metadata = await image.metadata()

  await image
    .resize({
      width: metadata.width >= metadata.height ? maxSize : undefined,
      height: metadata.height > metadata.width ? maxSize : undefined,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .webp({ quality: 82 })
    .toFile(outputPath)

  await unlink(inputPath)

  const afterSize = (await stat(outputPath)).size
  const saved = ((1 - afterSize / beforeSize) * 100).toFixed(0)

  return { name, beforeSize, afterSize, saved }
}

async function main() {
  const files = await readdir(IMAGES_DIR)
  let totalBefore = 0
  let totalAfter = 0
  const results = []

  for (const file of files.sort()) {
    const result = await convertFile(file)
    if (!result) continue
    results.push(result)
    totalBefore += result.beforeSize
    totalAfter += result.afterSize
  }

  console.log(`Converted ${results.length} images\n`)
  for (const { name, beforeSize, afterSize, saved } of results) {
    console.log(
      `  ${name}.webp  ${formatBytes(beforeSize)} → ${formatBytes(afterSize)}  (-${saved}%)`
    )
  }
  console.log(
    `\nTotal: ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)}  (-${((1 - totalAfter / totalBefore) * 100).toFixed(0)}%)`
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

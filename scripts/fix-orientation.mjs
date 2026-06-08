import { readFile } from 'node:fs/promises'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { join } from 'node:path'
import sharp from 'sharp'

const execFileAsync = promisify(execFile)
const IMAGES_DIR = join(process.cwd(), 'public/images')

const FIXES = [
  {
    output: 'spirits-collection.webp',
    max: 1600,
    async load() {
      const { stdout } = await execFileAsync('git', [
        'show',
        '4b6e949^:public/images/spirits-collection.jpg',
      ], { encoding: 'buffer', maxBuffer: 50 * 1024 * 1024 })
      return stdout
    },
  },
  {
    output: 'terrace-table-setting.webp',
    max: 1600,
    async load() {
      const { stdout } = await execFileAsync('git', [
        'show',
        '4b6e949^:public/images/terrace-table-setting.jpg',
      ], { encoding: 'buffer', maxBuffer: 50 * 1024 * 1024 })
      return stdout
    },
  },
  {
    output: 'set-for-dinner.webp',
    max: 2400,
    async load() {
      return readFile(join(process.cwd(), 'Images/IMG_6197.JPG'))
    },
  },
]

async function reencode(input, outputPath, maxSize) {
  // Apply EXIF orientation first, then resize using corrected dimensions
  const oriented = await sharp(input).rotate().toBuffer()
  const meta = await sharp(oriented).metadata()

  await sharp(oriented)
    .resize({
      width: meta.width >= meta.height ? maxSize : undefined,
      height: meta.height > meta.width ? maxSize : undefined,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .webp({ quality: 82 })
    .toFile(outputPath)

  return sharp(outputPath).metadata()
}

async function main() {
  for (const { output, max, load } of FIXES) {
    const input = await load()
    const meta = await reencode(input, join(IMAGES_DIR, output), max)
    console.log(`${output} -> ${meta.width}x${meta.height}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

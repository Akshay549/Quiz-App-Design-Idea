import { FileCode2, Palette, Terminal, Eye } from 'lucide-react'

export function HtmlIcon () {
  return <FileCode2 className='text-orange-500' />
}

export function CssIcon () {
  return <Palette className='text-blue-500' />
}

export function JsIcon () {
  return <Terminal className='text-yellow-500' />
}

export function AccessibilityIcon () {
  return <Eye className='text-green-500' />
}

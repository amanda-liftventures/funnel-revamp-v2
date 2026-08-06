import { Fragment } from 'react'

/**
 * Renders a string with *italic* and **bold** spans (the only markup used in
 * the mocked funnel JSON).
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={i}>{part.slice(1, -1)}</em>
        }
        return <Fragment key={i}>{part}</Fragment>
      })}
    </>
  )
}

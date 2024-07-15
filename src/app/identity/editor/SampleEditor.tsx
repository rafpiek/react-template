import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CharacterCount from '@tiptap/extension-character-count'
import Focus from '@tiptap/extension-focus'

export const SampleEditor = () => {
  const editor = useEditor({
    content: '<p>Hello World! 🌍️</p>\n<h1>This is header</h1>',
    extensions: [
      StarterKit,
      CharacterCount,
      Focus.configure({
        className: 'bg-zinc-600 rounded-md'
      })
    ]
  })
  return (
    <div className="prose dark:prose-invert mt-8 rounded-md bg-muted px-4 py-8">
      <article className="">
        <h1>This is h1 editor</h1>
        <h2>This is h2 editor</h2>
      </article>
      <EditorContent editor={editor} />
      <span className="text-white">{editor?.storage.characterCount.words() || 0} words</span>
    </div>
  )
}

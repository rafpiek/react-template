import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CharacterCount from '@tiptap/extension-character-count'
import Focus from '@tiptap/extension-focus'

export const SampleEditor = () => {
  const editor = useEditor({
    content: '<p>Hello World! 🌍️</p>',
    extensions: [
      StarterKit,
      CharacterCount,
      Focus.configure({
        className: 'bg-zinc-600 rounded-md'
      })
    ]
  })
  return (
    <div className="prose mt-8 rounded-md bg-muted px-4 py-8">
      <EditorContent editor={editor} />
      <span className="text-white">{editor?.storage.characterCount.words() || 0} words</span>
    </div>
  )
}

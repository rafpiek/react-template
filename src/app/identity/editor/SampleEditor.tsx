import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CharacterCount from '@tiptap/extension-character-count'
import Focus from '@tiptap/extension-focus'
import { useEffect } from 'react'

export const SampleEditor = () => {
  const editor = useEditor({
    content: '',
    extensions: [
      StarterKit,
      CharacterCount.configure({}),
      Focus.configure({
        className: 'bg-zinc-700 rounded-md'
      })
    ],
    onUpdate({ editor }) {
      const content = editor.getJSON()
      localStorage.setItem('editor-content', JSON.stringify(content))
    }
  })

  useEffect(() => {
    if (editor) {
      const cachedContent = JSON.parse(localStorage.getItem('editor-content') || '')
      editor.commands.setContent(cachedContent || '')
    }
  }, [editor])

  return (
    <div className="prose dark:prose-invert mt-8 rounded-md bg-muted px-4 py-8">
      <article className="">
        <h1>This is h1 editor</h1>
        <h2>This is h2 editor</h2>
      </article>
      <EditorContent editor={editor} />
      <span className="mr-4 text-white">{editor?.storage.characterCount.words() || 0} words</span>
      <span className="text-white">
        {editor?.storage.characterCount.characters() || 0} characters
      </span>
    </div>
  )
}

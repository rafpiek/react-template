import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CharacterCount from '@tiptap/extension-character-count'
import Focus from '@tiptap/extension-focus'
import { useEffect, useMemo, useState } from 'react'
import Confetti from 'react-confetti'

const TARGET_WORDS = 20

export const SampleEditor = () => {
  const [initialWordsCount, setInitialWordsCount] = useState(0)
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
      setInitialWordsCount(editor.storage.characterCount.words())
    }
  }, [editor])

  const wordsCount = editor?.storage.characterCount.words() || 0

  const targetReached = useMemo(() => {
    if (initialWordsCount === 0) return false
    if (wordsCount > initialWordsCount && wordsCount >= TARGET_WORDS) {
      return true
    }
  }, [wordsCount, initialWordsCount])

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
      {targetReached && <Confetti gravity={0.5} recycle={false} numberOfPieces={2000} />}
    </div>
  )
}

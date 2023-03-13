export default function Todoes({todo}) {
  return (
    <section>
        <span>{todo}</span>
        <button>Edit</button>
        <button>Delete</button>
    </section>
  )
}

export default function Todo({data}) {
  return (
    <section>
        <span>{data}</span>
        <button>Edit</button>
        <button>Delete</button>
    </section>
  )
}

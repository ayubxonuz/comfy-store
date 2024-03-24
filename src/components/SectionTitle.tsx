function SectionTitle({text}: {text: string}) {
  return (
    <>
      <p className="my-8 tracking-wide opacity-90 capitalize text-3xl">
        {text}
      </p>
      <hr />
    </>
  )
}
export default SectionTitle

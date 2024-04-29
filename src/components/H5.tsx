const H5 = ({ text, className, isHtml = false }: { text: string, className?: string, isHtml?: boolean }) => {
  return (
      !isHtml ? <h5 className={`font-normal text-base ${className}`} >{text}</h5> : <h5 className={`font-normal text-base ${className}`} dangerouslySetInnerHTML={{ __html: text }}></h5>
  )
}

export default H5
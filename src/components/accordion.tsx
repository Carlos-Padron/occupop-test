

interface AccordionInterface {
    id: number
    title: string,
    body: string,
    isOpen: boolean,
    openAccordion: (accordion: number) => void
}


const Accordion = ({ id, title, body, isOpen, openAccordion }: AccordionInterface) => {
    return (
        <div className="collapse collapse-arrow" onClick={(e) => openAccordion(id)}>
            <input type="radio" name={`my-accordion-${id}`} checked={isOpen} />
            <div className="collapse-title text-xl font-medium">
                {title}
            </div>
            <div className="collapse-content">
                <p>{body}</p>
            </div>
        </div>
    )
}




export default Accordion
import whatsapp from "/images/whatsapp.png"
export const WhatsAppButton = () => {
    return (
        <div className="fixed bottom-5 right-5 z-50 aspect-square rounded-full w-10">
            <a href="https://wa.me/+255658191222" className="w-full object-cover" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt="whatsapp" />
            </a>
        </div>
    )
}

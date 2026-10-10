import './components-css/RainbowFillButton.css'

/* Renders a single <a>: previously a <button> wrapping an <a>, which is
   invalid HTML (nested interactive elements) and gave two tab stops. */
const RainbowFillButton = ({text, href = "https://wa.me/917248668648"}) => {
  return (
    <a
      className="btn-55 shrink"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{text}</span>
    </a>
  )
}

export default RainbowFillButton

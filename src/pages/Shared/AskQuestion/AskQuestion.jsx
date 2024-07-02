import "react-tooltip/dist/react-tooltip.css"
import { Fade } from "react-awesome-reveal"
import { Cursor, useTypewriter, } from "react-simple-typewriter"
const AskQuestion = () => {
  const [text] = useTypewriter({
    words: ['Frequently Ask Question'],
    loop:{},
})
  return (
    <div>
      <h2 className="my-5 text-center font-bold text-blue-500 text-3xl">
        {text}<Cursor></Cursor>
      </h2>
      <Fade direction="right">
      <p className="text-center text-xl">Here are some frequently asked questions (FAQs) that customers <br /> might have about the Art And Craft House website:</p>
      </Fade>
      <Fade direction="right">
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-bold">
        Do you offer international shipping?
        </div>
        <div className="collapse-content">
            <p>
            Customers often want to know if they can receive their art and craft supplies or finished products outside of the website home country. Providing clear information about shipping policies, including international options, can help alleviate this concern.
            </p>
        </div>
      </div>
      </Fade>
      <Fade direction="left">
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
        What payment methods do you accept?
        </div>
        <div className="collapse-content">
            <p>
            Customers want to ensure that their preferred payment method is accepted before making a purchase. Listing accepted payment methods, such as credit/debit cards, PayPal, or other options, helps customers feel confident about completing their transactions.
            </p>
        </div>
      </div>
      </Fade>
      <Fade direction="right">
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
        Are your products handmade or mass-produced?
        </div>
        <div className="collapse-content">
            <p>
            Many customers value authenticity and craftsmanship, so they may inquire about whether the items sold on the website are handmade or mass-produced. Providing information about the artisans or crafting process can help customers make informed decisions and appreciate the value of the products.
            </p>
        </div>
      </div>
      </Fade>
      <Fade direction="left">
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
        Do you offer customization or personalization options?
        </div>
        <div className="collapse-content">
            <p>
            Some customers may wish to personalize their purchases for special occasions or unique preferences. Clarifying whether customization or personalization services are available, along with any associated costs or limitations, can assist customers in tailoring their orders to suit their needs.
            </p>
        </div>
      </div>
      </Fade>
    </div>
  )
}

export default AskQuestion

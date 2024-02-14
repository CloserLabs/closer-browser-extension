import type { PlasmoMessaging } from "@plasmohq/messaging"
 
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const message = {
    openSidepanel: true
  }
 
  res.send({
    message
  })
}
 
export default handler

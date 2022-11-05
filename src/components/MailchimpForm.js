import MailchimpSubscribe from "react-mailchimp-subscribe"

const MailchimpForm = () => {
    const postURL = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}$id=${process.env.REACT_APP_MAILCHIMP_ID}`;
    return ( 
        <>
    <MailchimpSubscribe url={postURL} render{({subscribe,status,message}) => (
        <></>
    )} />
    </>
 );
}
 
export default MailchimpForm;
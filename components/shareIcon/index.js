import {
    FacebookShareButton,
    LinkedinShareButton,
    EmailShareButton,
    TwitterShareButton
} from 'react-share'

const shareIcon = ({url,showShare}) => (
    <ul className="shareIcon" style={{display:showShare ? 'inline-block' : 'none'}}>
        <li><img src="/shareIcon/share-icon.png" alt="share-fb"/></li>
        <li><FacebookShareButton url={url}><img src="/shareIcon/fb-icon.svg" alt="icon-fb"/></FacebookShareButton></li>
        <li><LinkedinShareButton url={url}><img src="/shareIcon/linked-icon.svg" alt="icon-linkedin"/></LinkedinShareButton></li>
        <li><TwitterShareButton url={url}><img src="/shareIcon/twitter-icon.svg" alt="icon-linkedin"/></TwitterShareButton></li>
        <li><EmailShareButton url={url}><img src="/shareIcon/email-icon.svg" alt="icon-linkedin"/></EmailShareButton></li>
    </ul>
)

export default shareIcon
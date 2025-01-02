
import Link from 'next/link'
import { IconSend } from "@tabler/icons-react";
const PostRequirment = () => {
  return (
    <section className="business-banner">
    <div className="business-banner-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <span className="tadline">
              Once you’ve settled on a Property
            </span>
            <h4 className="display-4 banner-heading">
              Be inspired to achieve more, get on top
              <br /> of every Property challenge today
            </h4>
            <Link
              href="/postrequirement"
              title="Post Requirement"
              className="explore-more post-requiremnet"
            >
              <span>
                <IconSend />
              </span>
              Post Requirement
              {/* </a> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PostRequirment

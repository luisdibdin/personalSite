import React from "react"
import { Flex, IconButton } from "@chakra-ui/core"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import LinkData from "../constants/social-links.json"

library.add(faInstagram, faGithub, faLinkedin, faSpotify)

const SocialLinks = ({ iconSize, maxWidth, clicked }) => {
  return (
    <Flex direction="row" justify="space-between" w="100%" maxW={maxWidth}>
      {LinkData.sociallinks.map(link => {
        return (
          <Link href={link.link} target="_blank">
            <IconButton
              title={link.title}
              variant="link"
              color="primary.red"
              _hover={{ color: "primary.midBlue" }}
              aria-label={link.title}
              icon={<FontAwesomeIcon icon={["fab", link.icon]} size={iconSize} />}
              onClick={clicked}
            />
          </Link>
        )
      })}
    </Flex>
  )
}

export default SocialLinks

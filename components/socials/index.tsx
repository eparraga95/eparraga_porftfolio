import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import Link from "next/link";
  
  export default function Socials() {
    return (
      <nav className="fixed bottom-0 left-0 p-4">
        <ul className="flex-column">
          <li className="py-2">
            <Link href="https://www.linkedin.com/in/eduardoparraga/">
              <FontAwesomeIcon
                className="size-8"
                icon={faLinkedin}
              ></FontAwesomeIcon>
            </Link>
          </li>
          <li className="py-2">
            <Link href="https://www.instagram.com/edparraga/">
              <FontAwesomeIcon
                className="size-8"
                icon={faInstagram}
              ></FontAwesomeIcon>
            </Link>
          </li>
          <li className="py-2">
            <Link href="https://github.com/eparraga95">
              <FontAwesomeIcon
                className="size-8"
                icon={faGithub}
              ></FontAwesomeIcon>
            </Link>
          </li>
          <li className="py-2">
            <Link href="https://www.facebook.com/eduardo.parraga.9">
              <FontAwesomeIcon
                className="size-8"
                icon={faFacebook}
              ></FontAwesomeIcon>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  
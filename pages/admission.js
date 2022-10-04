import Head from "next/head";
import styles from "../styles/Admission.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import nft1 from "../public/1.jpeg";
import nft2 from "../public/2.jpeg";
import nft3 from "../public/3.jpeg";
import nft4 from "../public/4.jpeg";
import nft5 from "../public/5.jpeg";
import nft6 from "../public/6.jpeg";
import nft7 from "../public/7.jpeg";

function Admission() {

  function zeroPad(num,count)
{
  var numZeropad = num + '';
  while(numZeropad.length < count) {
    numZeropad = "0" + numZeropad;
  }
  return numZeropad;
}

const images = [nft1, nft2, nft3, nft4, nft5, nft6, nft7]

  return (
    <div className="overflow-hidden">
      <Head>
        <title>ETG#2</title>
        <meta name="description" content="virtual art exhibition" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Admission</h1>
      <div className="nes-container is-rounded">
        <div className="flex justify-between">
          {[1, 2].map((x) => (
            <i key={x} className="nes-icon star is-medium align-super"></i>
          ))}
        </div>
        <p>
          We&apos;d like to invite you to contribute an amount of your choice to
          the Study Free Program. It will leave a lucky Filipino student
          completely care-free of their finances.
        </p>
        {/* <div className="flex justify-center">
          {[1].map((x) => (
            <i key={x} className="nes-icon trophy is-large align-super"></i>
          ))}
        </div> */}
        <p>We grant that 100% of your money will go to a student.</p>
        <p>
          You can read all you need to know about this cause on the gofundme
          page.
        </p>
        <p>
          In return for your help you can choose an artwork from the NFT
          collection below to be yours! Contribute now, then choose your NFT by
          replying to your donator email with the number of the NFT you like to
          receive.
        </p>
        <p>
          And of course: you&apos;re a moral superhero{" "}
          <i className="nes-icon trophy is-medium align-middle"></i>
        </p>
        <div>
          <motion.p
            initial={{ x: 0 }}
            animate={{ x: "90%" }}
            transition={{
              ease: "linear",
              duration: 5,
              repeatType: "reverse",
              repeat: Infinity,
              repeatDelay: 0,
            }}
          >
            <i className="nes-mario animate-spin"></i>
          </motion.p>
        </div>
        <div className="flex justify-center">
          <Link href="https://gofundme.com">
            <a
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className="button-enter nes-btn is-green"
            >
              Contribute now
            </a>
          </Link>
        </div>
        <p>
          Nonetheless, we want to grant equal accessability to art, so if you
          cannot or want not donate, you&apos;re still warmly welcome to enjoy
          this exhibition for free.
        </p>
        <div className="flex justify-between mt-6">
          {[1,2].map((x) => (
            <i key={x} className="nes-icon star is-medium align-super"></i>
          ))}
        </div>
      </div>

      <div className="nes-container is-rounded">
        <div className="flex flex-col items-center gap-[2rem] p-[2rem]">
          { images.map((x, i) => (
            <div
              key={i}
              className={`nes-balloon max-w-xl max-w- ${
                i % 2 === 0 ? "from-right" : "from-left"
              }`}
            >
              <Image src={x} />
              <p className="text-right">#{zeroPad(i, 3)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admission;

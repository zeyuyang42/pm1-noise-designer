
import Image from "next/image";

export default function FixedLogos() {
  return (
    <>
         <section>
        <Image
          className="mx-auto my-auto fixed top-10 left-10"
          src="logos/the-peace-company.svg"
          alt="the-peace-company"
          width={150}
          height={150}
          priority
        />
        <Image
          className="mx-auto my-auto fixed bottom-10 right-50"
          src="logos/issue-design-logo.svg"
          alt="issue-design-logo"
          width={92}
          height={92}
          priority
        />
        <Image
          className="mx-auto my-auto fixed bottom-10 right-10"
          src="logos/pm1-noise-designer-logo.svg"
          alt="pm1-noise-designer-logo"
          width={120}
          height={120}
          priority
        />
      </section>
    </>
  );
}
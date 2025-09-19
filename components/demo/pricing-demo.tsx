import { Heading, PricingWrapper, Price, Paragraph } from "@/components/ui/animated-pricing-cards";

export default function PricingDemo() {
  return (
    <div className="h-[500px] w-full flex items-center justify-center">
      <PricingWrapper contactHref={'/contact'} type={'waves'}>
        <Heading>Custom Component</Heading>
        <Price>
          $2000
          <br />
          /mo
        </Price>
        <Paragraph>
          Special UI component for your website made with React.js, TailwindCSS and FramerMotion.
        </Paragraph>
      </PricingWrapper>
    </div>
  );
}

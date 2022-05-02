import { Button } from "@codely/design-system/src/atoms/Button";
import { Heading } from "@codely/design-system/src/atoms/Heading";
import { StoriesMobile } from "@codely/design-system/src/molecules/StoriesMobile";
import { StoryPlayer } from "@codely/design-system/src/molecules/StoryPlayer";
import { Container } from "@codely/design-system/src/objects/Container";

import { Story } from "./useStories";

import styles from "./Hero.module.scss";

interface HeroProps {
  stories: Story[];
  ctaText: string;
  ctaUrl: string;
  claim: string;
  titleId: string;
  children: React.ReactNode;
}

export function Hero({ stories, ctaText, ctaUrl, claim, titleId, children }: HeroProps) {
  return (
    <Container tag="section" ariaLabelledby={titleId}>
      <div className={styles.hero}>
        <StoriesMobile stories={stories} />

        <div className={styles.hero__content}>
          <Heading id={titleId} level="h1" size="large">
            {children}
          </Heading>
          <div className={styles.hero__cta}>
            <Button href={ctaUrl}>{ctaText}</Button>
            <p className={styles.hero__tip}>{claim}</p>
          </div>
        </div>
        <div className={styles.hero__story}>
          <StoryPlayer stories={stories} />
        </div>
      </div>
    </Container>
  );
}

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Google",
    img: "https://platform.kidjig.com/google.png",
  },
  {
    name: "Anthropic",
    
    img: "https://platform.kidjig.com/6676e783047401d212c9e8f0_logo_icon.svg",
  },
  {
    name: "Mistral",
    img: "https://platform.kidjig.com/mistral-color.png",
  },
  {
    name: "Qwen",
    img: "https://platform.kidjig.com/qwen-color.png",
  },
  {
    name: "Meta",
    img: "https://platform.kidjig.com/meta-color.png",
  },
  {
    name: "DeepSeek",
    img: "https://platform.kidjig.com/deepseek-color.png",
  },
  {
    name: "OpenAi",
    img: "https://platform.kidjig.com/openai.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
}) => {
  return (
    <figure
      className={cn(
        "relative  h-full w-60 cursor-pointer overflow-hidden rounded-xl border md:p-2 scale-75 md:scale-100",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-950/[.1] dark:bg-gray-950/[.10] dark:hover:bg-gray-950/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-6">
        <img className="rounded-full" width="50" height="50" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-3xl font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeSection() {
  return (
    <div className="my-16 relative flex md:w-7xl mx-auto flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:22s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:22s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

import StoryContent from "./StoryContent";
import StoryImage from "./StoryImage";

export default function CompanyStory() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        <StoryContent />

        <StoryImage />

      </div>
    </section>
  );
}
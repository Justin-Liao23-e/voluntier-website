import React, { useState, useRef, useEffect } from 'react';

interface FeatureItem {
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
}

// Row component handling video autoplay on visibility
const FeatureRow = ({ item }: { item: FeatureItem }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (videoRef.current) {
          entry.isIntersecting ? videoRef.current.play() : videoRef.current.pause();
        }
      });
    }, { threshold: 0.5 });
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-8">
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h3 className="font-lexend text-xl font-bold">{item.title}</h3>
        <h4 className="text-accent font-medium">{item.subtitle}</h4>
        <p>{item.description}</p>
      </div>
      <div className="md:w-1/2">
        {item.videoSrc.includes('youtube.com') ? (
          <div className="relative w-full pb-[56.25%] rounded-lg shadow-lg overflow-hidden">
            <iframe
              src={`${item.videoSrc}?autoplay=1&mute=1&loop=1&playlist=${item.videoSrc.split('/').pop()}`}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; loop; muted;"
              allowFullScreen
            />
          </div>
        ) : (
          <video
            ref={videoRef}
            src={item.videoSrc}
            className="w-full h-auto rounded-lg shadow-lg"
            muted
            loop
            playsInline
            controls={false}
          />
        )}
      </div>
    </div>
  );
};

const volunteerFeatures: FeatureItem[] = [
  { title: 'Explore Opportunities', subtitle: 'Wide Network', description: 'Browse volunteer gigs near you.', videoSrc: 'https://youtube.com/shorts/eOTYUNlEQsQ?si=XGI5u94KJvtzOAFl' },
  { title: 'Track Progress', subtitle: 'Badge System', description: 'Earn badges for completed events.', videoSrc: 'https://example.com/vol2.mp4' },
  { title: 'Community Impact', subtitle: 'Share Stories', description: 'Showcase your volunteer impact.', videoSrc: 'https://example.com/vol3.mp4' },
];

const organizerFeatures: FeatureItem[] = [
  { title: 'Event Management', subtitle: 'Easy Setup', description: 'Quickly set up new events.', videoSrc: 'https://example.com/org1.mp4' },
  { title: 'Volunteer Coordination', subtitle: 'Seamless Communication', description: 'Chat with volunteers in real time.', videoSrc: 'https://example.com/org2.mp4' },
  { title: 'Analytics Dashboard', subtitle: 'Measure Impact', description: 'View event performance metrics.', videoSrc: 'https://example.com/org3.mp4' },
];

const FeaturesDetailed = () => {
  const [active, setActive] = useState<'volunteer'|'organizer'>('volunteer');
  const features = active === 'volunteer' ? volunteerFeatures : organizerFeatures;

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-8">
          <button onClick={() => setActive('volunteer')} className={`${active === 'volunteer' ? 'bg-accent text-white' : 'bg-gray-200'} px-4 py-2 rounded-l-full`}>For Volunteers</button>
          <button onClick={() => setActive('organizer')} className={`${active === 'organizer' ? 'bg-accent text-white' : 'bg-gray-200'} px-4 py-2 rounded-r-full`}>For Organizers</button>
        </div>
        <div className="text-center mb-12">
          <p className="text-lg max-w-2xl mx-auto">{active === 'volunteer' ? 'Placeholder text for Volunteers section.' : 'Placeholder text for Organizers section.'}</p>
        </div>
        <div className="flex flex-col space-y-16">
          {features.map((item, idx) => (
            <FeatureRow key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesDetailed;
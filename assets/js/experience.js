AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Cloud Engineering Co-op",
    cardImage: "assets/images/experience-page/cibc1.png",
    place: "CIBC",
    time: "(Sept 2024 - present)",
    desp: "<li>Configured and updated Network Security Groups across 1000 sites in the US and Canada, improving compliance adherence by 30% and strengthening security policies enterprise-wide</li> <li>Resolved a critical bug in a Python script, averting potential damages of over $10 million for the bank</li> <li>Streamlined development workflows by 40% by implementing Azure DevOps solutions, including repository management, automated CI/CD pipelines, and deployment processes</li> <li>Developed and tested scripts in YAML, Python, and SQL, streamlining networking processes and reducing manual workflows by 80%</li>",
  },
  {
    title: "Freelance Software Engineer",
    cardImage: "assets/images/experience-page/Freelancer.jpg",
    place: "InsightFlow AI",
    time: "(Nov 2023 - Sept 2024)",
    desp: "<li>Spearheaded the development of 15+ custom websites using HTML and React.js for the front end to build visually captivating websites, increasing client traffic by 85%</li><li>Engineered personalized AI chatbots using generative AI to automate customer interactions and reduce average response time by 90%</li><li>Negotiated and closed contracts with over 20 businesses by demonstrating the ROI and competitive advantages of tailored chatbot solutions, generating $10K+ in revenue annually</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "HackHive 2025",
    subtitle: "Participant",
    image: "assets/images/experience-page/HackHive.png",
    desp: "Developed an AI-powered meal planner in under 12 hours at HackHive 2025 as a team of three, leveraging Node.js and React.js to streamline meal generation with AI-driven personalization.",
    href: "https://github.com/ayaanahmed05/NutriAI",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);

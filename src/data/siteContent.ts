import type { NavLink, BarberData, ServiceTab, BeardStyle, Testimonial, BlogPost, Product, GalleryItem, ServicePricing, StudioValue } from '../types';

export const brand = {
  name: 'Bedbeards',
  tagline: 'Sculpt Your Beard, Define Your Style',
  logo: '/images/logo.svg',
  address: 'Bedbeards Grooming Studio\n123 Beard Street, Suite 456\nGroomtown, GT 78901',
  phone: '(555) 123-4567',
  email: 'contact@bedbeards.com',
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Barbers', href: '#barbers' },
];

export const hero = {
  headline: 'Sculpt Your Beard,\nDefine Your Style',
  description:
    'Experience expert grooming tailored to your face shape and personal style. From classic cuts to bold designs, we make your beard a masterpiece.',
  cta: 'Explore Now',
  socials: ['Facebook', 'Instagram', 'LinkedIn'],
  slides: [
    { id: '1', image: '/images/hero-1.webp' },
    { id: '2', image: '/images/hero-2.webp' },
    { id: '3', image: '/images/hero-3.webp' },
  ],
};

export const about = {
  sectionTag: 'About us',
  headline: 'Where Beards Meet Mastery',
  paragraphLeft:
    "At Bedbeards, we believe every beard tells a story, and we're here to help you craft yours. Founded with a passion for men's grooming, our mission is to provide a space where style meets precision. Whether you're looking for a classic trim, a bold new beard design, or simply the best grooming products, we're dedicated to delivering top-notch services tailored to your unique look.",
  paragraphRight:
    "Our expert barbers bring years of experience and a keen eye for detail to every cut and trim. Beyond beards, we offer precision haircuts that elevate your entire appearance. With a focus on quality and care, we've curated an exclusive range of beard and mustache products to help you maintain your style effortlessly. At Bedbeards, it's more than grooming, it's a lifestyle.",
  cta: 'Learn More',
  images: {
    main: '/images/about-1.webp',
    topRight: '/images/about-2.webp',
    bottomLeft: '/images/about-3.webp',
    bottomRight: '/images/about-4.webp',
  },
};

export const services: ServiceTab[] = [
  {
    id: 'cuts',
    label: 'Cuts And Styling',
    image: '/images/cuts-and-styling-1.webp',
    alt: 'Precision cut service',
    title: 'Expert Cuts And Precision Styling',
    description:
      "From beard trims to mustache shaping and classic haircuts, we've got you covered. Our skilled barbers craft the perfect style to complement your features and personal taste, ensuring a sharp and polished look.",
    cta: 'Book a Cut',
    previewImages: [
      '/images/cuts-and-styling-1.webp',
      '/images/cuts-and-styling-2.webp',
      '/images/cuts-and-styling-3.webp',
    ],
  },
  {
    id: 'treatments',
    label: 'Beard Treatments',
    image: '/images/beard-treatment-1.webp',
    alt: 'Beard treatment',
    title: 'Nourish And Perfect Your Beard',
    description:
      'Keep your beard looking its best with our range of treatments. From hydrating therapies to specialized styling solutions, we help you achieve a healthy, well-groomed beard that stands out.',
    cta: 'View Treatments',
    previewImages: [
      '/images/beard-treatment-1.webp',
      '/images/beard-treatment-2.webp',
      '/images/beard-treatment-3.webp',
    ],
  },
  {
    id: 'products',
    label: 'Grooming Products',
    image: '/images/premium-grooming-essential-1.webp',
    alt: 'Grooming essential',
    title: 'Premium Grooming Essentials',
    description:
      'Shop our exclusive range of high-quality grooming products, from nourishing beard oils to styling waxes. Everything you need for effortless at-home care is just a click away.',
    cta: 'Shop Now',
    previewImages: [
      '/images/premium-grooming-essential-1.webp',
      '/images/premium-grooming-essential-2.webp',
      '/images/premium-grooming-essential-3.webp',
    ],
  },
];

export const servicesSection = {
  sectionTag: 'Services',
  headline: 'Crafting Confidence,\nOne Style at a Time',
  description:
    'At Bedbeards, we deliver precision and care with every service. From cuts to treatments and grooming products, we ensure you always look and feel your best.',
};

export const beardStyles: BeardStyle[] = [
  {
    id: 'full-beard',
    name: 'Full Beard',
    image: '/images/styles-full-beard.webp',
    description:
      "The Full Beard is a bold, classic style that extends from the cheekbones down to the jawline. It's the epitome of masculinity, favored by individuals who embrace a rugged, natural look. Historically, it's been a symbol of strength, wisdom, and maturity, with famous wearers ranging from Viking warriors to modern-day icons like Abraham Lincoln.",
  },
  {
    id: 'goatee',
    name: 'Goatee',
    image: '/images/styles-goatee.webp',
    description:
      'The Goatee is a versatile style that focuses hair on the chin area. It offers a clean, refined look that works for both casual and formal occasions, and suits a wide range of face shapes.',
  },
  {
    id: 'van-dyke',
    name: 'Van Dyke',
    image: '/images/styles-van-dyke.webp',
    description:
      "Named after 17th-century Flemish painter Anthony van Dyck, the Van Dyke combines a pointed beard with a disconnected mustache, creating a sophisticated and artistic expression of masculinity.",
  },
  {
    id: 'stubble',
    name: 'Stubble',
    image: '/images/styles-stubble.webp',
    description:
      'The Stubble look is effortlessly cool — a short, intentionally-maintained growth that balances ruggedness with a polished finish. Low maintenance, high impact.',
  },
  {
    id: 'handlebar',
    name: 'Handlebar Mustache',
    image: '/images/styles-handlebar-mustache.webp',
    description:
      "The Handlebar Mustache is a bold statement piece with long, upward-curled ends. A nod to classic barbershop culture, it signals confidence and a love for timeless style.",
  },
];

export const stylesSection = {
  sectionTag: 'styles',
  headline: 'Find Your\nSignature Style',
  background: '/images/styles-background.webp',
};

export const barbers: BarberData[] = [
  {
    id: 'leo',
    nickname: '"The Sculptor"',
    name: 'Leo Mendez',
    specialty: 'Precision Beard Sculpting',
    image: '/images/team-leo-mendez.webp',
    socials: { facebook: '#', instagram: '#', linkedin: '#' },
    offset: 'down',
    bio: 'Leo has spent twelve years turning beards into architecture. Trained in Barcelona and New York, he approaches every face the way a sculptor approaches stone — removing everything that doesn\'t belong. His specialty is structural beard work: the kind of precise edge, fade, and contour that makes a beard look engineered. If you want something that changes how your face reads, Leo is the person you book.',
    yearsExp: 12,
  } as BarberData & { bio: string; yearsExp: number },
  {
    id: 'ava',
    nickname: '"The Visionary"',
    name: 'Ava Harris',
    specialty: 'Creative Beard Artistry',
    image: '/images/team-ava-harris.webp',
    socials: { facebook: '#', instagram: '#', linkedin: '#' },
    offset: 'up',
    bio: 'Ava brings a background in fine arts to every cut. She reads hair the way a painter reads a canvas — thinking about weight, movement, and negative space as much as length and line. Her creative beard work has been featured in two editorial shoots, and her haircut consultations are the most requested at Bedbeards. If you\'re not sure what you want, start with Ava.',
    yearsExp: 8,
  } as BarberData & { bio: string; yearsExp: number },
  {
    id: 'max',
    nickname: '"The Classic"',
    name: 'Max Thomas',
    specialty: 'Traditional Haircuts & Mustache Grooming',
    image: '/images/team-max-thomas.webp',
    socials: { facebook: '#', instagram: '#', linkedin: '#' },
    offset: 'down',
    bio: 'Max learned his craft from his grandfather\'s barbershop in Chicago, and he has never lost the belief that the old techniques are still the best ones. Hot towel shaves, straight razor finishing, pompadours, and side parts — Max executes the classic American repertoire with a precision that makes every cut feel like an event. No rush, no shortcuts, and always a conversation worth having.',
    yearsExp: 15,
  } as BarberData & { bio: string; yearsExp: number },
  {
    id: 'ella',
    nickname: '"The Perfectionist"',
    name: 'Ella Wilson',
    specialty: 'Beard Treatments & Care',
    image: '/images/team-ella-wilson.webp',
    socials: { facebook: '#', instagram: '#', linkedin: '#' },
    offset: 'up',
    bio: 'Ella is the person you see when your beard needs more than a trim. With formal training in trichology and four years specializing in beard health, she understands why beards fail before they succeed — and how to fix the underlying conditions. Dry skin, patchiness, breakage, uneven growth: Ella diagnoses and treats all of it. Her treatment sessions are the most thorough in the studio.',
    yearsExp: 6,
  } as BarberData & { bio: string; yearsExp: number },
];

export const barbersSection = {
  sectionTag: 'Our Team',
  headline: 'Meet the Artists\nBehind the Beards',
  description:
    'At Bedbeards, our skilled barbers are dedicated to creating the perfect style for every client. With years of experience and a passion for grooming, they\'ll help you look your best.',
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      "Max nailed the classic look I was going for. A true professional who takes the time to get it right. I'm hooked!",
    author: 'Tom Gallagher',
    image: '/images/testimonials-1.webp',
  },
  {
    id: 't2',
    quote:
      "The best beard trim I've ever had! Leo really knows how to shape a beard perfectly. I left feeling like a new man!",
    author: 'Jason Peterson',
    image: '/images/testimonials-2.webp',
  },
  {
    id: 't3',
    quote:
      "Ava's creativity is unmatched. She gave me a fresh look that got me tons of compliments. Highly recommend!",
    author: 'Mark Stevens',
    image: '/images/testimonials-3.webp',
  },
];

export const testimonialsSection = {
  sectionTag: 'Clients',
  headline: 'What Our\nClients Say',
  description:
    "At Bedbeards, we take pride in delivering exceptional service and results. But don't just take our word for it, here's what our clients have to say about their experiences with us.",
  background: '/images/testimonials-background.webp',
};

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    slug: 'top-beard-care-tips-2024',
    date: 'January 10, 2024',
    readingTime: '5 min read',
    author: 'Leo Mendez',
    category: 'care',
    title: 'Top Beard Care Tips for 2024',
    excerpt:
      'Discover the best practices and products for maintaining a healthy, strong beard. Our guide to beard care covers everything from washing to trimming.',
    image: '/images/blog-1.webp',
    imageBottom: false,
    content: `A great beard doesn't happen by accident. Behind every well-groomed beard is a routine built on the right products, the right tools, and an understanding of how your beard actually grows.

**Wash it right — not too often.** Over-washing strips the natural oils that keep your beard soft and your skin hydrated. Two to three times a week with a dedicated beard shampoo is enough for most men. On other days, rinse with warm water and condition.

**Oil before you style.** Beard oil is not optional. Apply a few drops to your palms, work it through the beard from root to tip, then follow with a comb or brush. The oil hydrates the skin underneath, reduces itch, and gives the beard a healthy sheen without looking greasy.

**Trim with intention.** Regular trims aren't just about length — they remove split ends and keep the shape clean. If you're growing your beard out, a monthly visit to Bedbeards keeps the edges sharp while the length builds.

**Shape to your face.** A beard that works for one face shape may not work for another. At Bedbeards, we consult before we cut. Leo Mendez, our precision sculpting specialist, spends the first five minutes of every appointment discussing what you're growing toward, not just what you have today.

**Protect it from the elements.** Wind, cold air, and sun damage beards just as they damage skin. In winter, apply a slightly heavier balm. In summer, the oil with some UV protection keeps the color from fading.

The difference between a good beard and a great one comes down to consistency. Show up for your beard the same way you show up for everything else that matters, and it will show.`,
  },
  {
    id: 'b2',
    slug: 'mastering-the-perfect-mustache',
    date: 'December 15, 2023',
    readingTime: '4 min read',
    author: 'Max Thomas',
    category: 'style',
    title: 'Mastering the Perfect Mustache',
    excerpt:
      'Learn how to achieve and maintain the perfect mustache, from choosing the right style to daily grooming tips.',
    image: '/images/blog-2.webp',
    imageBottom: true,
    content: `The mustache is making a serious comeback — not the ironic kind, but the deliberate, considered kind worn by men who understand that detail changes everything.

**Choose the style that fits the face, not the trend.** A handlebar needs a strong jaw to anchor it. The chevron works for almost everyone. The pencil mustache demands the right bone structure. At Bedbeards, Max Thomas has been shaping mustaches since before they were fashionable again, and his first question is always the same: what does your face need?

**The shape is everything.** Unlike a full beard, a mustache has no margin for imprecision. A millimeter too far left, and it reads asymmetrical. The edges need to be sharp, the upper lip line clean, and the lower edge consistent. This is not a home trim job unless you have a very steady hand and a good eye.

**Wax is your best friend.** A quality mustache wax gives you hold without the stiff, plasticized look. Work a small amount between your fingers, apply from the center out, and shape with a fine-toothed comb. For handbars, curl the ends upward with your fingers before the wax sets.

**Maintain the skin underneath.** Mustache skin is often neglected because it's hidden. Dry skin under the mustache causes flaking, itch, and a dull-looking beard. A small amount of beard oil applied beneath the mustache daily keeps the skin in good condition.

The men who wear mustaches well are the men who take them seriously. That starts with a good shaping session at a barbershop that knows the difference between a trim and a craft.`,
  },
  {
    id: 'b3',
    slug: 'art-of-a-timeless-haircut',
    date: 'November 30, 2023',
    readingTime: '6 min read',
    author: 'Ava Harris',
    category: 'style',
    title: 'The Art of a Timeless Haircut',
    excerpt:
      'From classic cuts to modern styles, explore how a great haircut can complement your facial hair and overall look.',
    image: '/images/blog-3.webp',
    imageBottom: false,
    content: `A haircut that still looks good three weeks after you got it is not an accident. It's the result of a barber who understood your head shape, your hair texture, your face, and what you're asking your hair to do between visits.

**The consultation is the first cut.** Before scissors or clippers touch your hair, a skilled barber should spend time understanding the architecture they're working with. At Bedbeards, Ava Harris starts every appointment by looking at how the hair falls naturally, where the growth patterns are, and what the previous cut left behind. This is not small talk — it's the foundation of every decision that follows.

**Texture and density change everything.** A fade that looks sharp on fine hair can look muddy on thick coarse hair. A crop that works on straight hair needs a different execution on a wave. The cut doesn't just remove hair; it creates the conditions for the hair to behave the way you want it to between cuts.

**Facial hair and head hair are one composition.** The mistake most men make is treating their beard and their haircut as separate decisions. They're not. The transition from haircut to beard — how the fade connects to the cheek line, how the sideburns relate to the beard edge — is where the full look either coheres or falls apart. Ava is particularly precise about this transition, and it's the detail that most clients say makes the biggest visible difference.

**Invest in a cut you can maintain.** The best haircut for your life is the one you can keep in shape between visits without a professional toolkit. Ask your barber what product to use and how much. Ask how long before the cut needs attention. A great barber answers these questions without being asked.

The timeless haircut is not a specific style. It's the quality of the thinking behind it.`,
  },
  {
    id: 'b4',
    slug: 'how-to-choose-the-right-beard-oil',
    date: 'November 10, 2023',
    readingTime: '4 min read',
    author: 'Ella Wilson',
    category: 'products',
    title: 'How to Choose the Right Beard Oil',
    excerpt:
      'Not all beard oils are equal. Understanding carrier oils, fragrance loads, and viscosity helps you pick the one your beard actually needs.',
    image: '/images/premium-grooming-essential-2.webp',
    imageBottom: false,
    content: `Walk into any grooming shop and you'll find twenty beard oils on the shelf. Most of them are fine. A few are exceptional. Knowing the difference comes down to reading the label with some intent.

**Carrier oils determine how it feels.** The base oil drives everything — absorption rate, weight, and skin response. Jojoba is closest to human sebum, making it well-tolerated by most skin types. Argan is lighter and faster-absorbing, good for daily use. Sweet almond and castor are heavier — better for coarse or dry beards, not ideal for fine hair that gets weighed down. Avoid anything with mineral oil as the primary base; it sits on top of the skin rather than absorbing.

**Fragrance load matters more than you think.** Essential oils add scent, but at high concentrations they irritate the skin under your beard. A quality beard oil will list essential oils last on the ingredient list and use them at a rate under three percent. If the fragrance is the first thing you notice when you open the bottle, that's too much.

**Match the formula to your beard type.** Fine or short beards need a lighter oil — jojoba or argan-based. Coarse, thick, or longer beards benefit from heavier formulas with castor or rosehip. Dry, flaky skin under the beard? Look for oils with added vitamin E or sea buckthorn, which directly address the skin rather than just the hair.

**Apply it right.** A few drops on dry palms, rubbed together, then worked through from skin to tip. Most men apply too much. If your beard looks shiny an hour after application, you're over-applying. Start with two drops and adjust from there.

At Bedbeards, every product consultation includes matching you to the right oil for your beard's actual condition, not just what's popular that month. The best oil is the one you'll use consistently.`,
  },
  {
    id: 'b5',
    slug: 'what-to-expect-hot-towel-shave',
    date: 'October 28, 2023',
    readingTime: '3 min read',
    author: 'Max Thomas',
    category: 'technique',
    title: 'What to Expect from a Hot Towel Shave',
    excerpt:
      'The hot towel shave is not a relic. It is the most precise, comfortable shave a man can get, and most men have never had one.',
    image: '/images/beard-treatment-1.webp',
    imageBottom: false,
    content: `If you have only ever shaved yourself at home, you have not experienced a shave. You've experienced hair removal. The two are not the same.

**The preparation is the treatment.** Before a blade touches your face, a hot towel opens the pores, softens the hair shaft, and signals to the skin that something careful is about to happen. The difference in shaving comfort between unprepared and prepared skin is significant enough that most men who experience it once don't go back to a cold-water shave.

**Pre-shave oil comes before the lather.** Applied to damp skin, it creates a secondary layer of protection that allows the blade to glide without drag. The lather goes on top — built with a quality brush to lift the hair, add moisture, and create a working surface for the razor.

**One pass is usually not enough.** A proper hot towel shave involves multiple passes: first with the grain to remove the bulk of the hair, then across the grain for closeness, and sometimes against the grain for the final pass on specific areas. Between passes, fresh lather is applied. The blade angle changes with each pass. There is no rushing involved.

**The finish closes everything.** A cold towel after the final pass closes the pores. A post-shave balm or alum block addresses any irritation and conditions the skin. When Max Thomas finishes a shave, the skin looks rested rather than worked.

If you have never had a professional hot towel shave, book one before you decide it's not for you. The experience changes how men think about the difference between grooming and maintenance.`,
  },
  {
    id: 'b6',
    slug: 'building-your-daily-beard-routine',
    date: 'October 14, 2023',
    readingTime: '4 min read',
    author: 'Leo Mendez',
    category: 'care',
    title: 'Building a Daily Beard Routine That Actually Sticks',
    excerpt:
      'A five-minute morning routine is all it takes to keep a beard looking intentional. The hard part is making it automatic.',
    image: '/images/beard-treatment-2.webp',
    imageBottom: false,
    content: `The men with the best beards don't spend a lot of time on them. They spend a small amount of time, consistently. The distinction matters more than it sounds.

**Start with the wash — but not every morning.** Daily beard washing with shampoo strips the oils that keep your skin hydrated and your beard soft. Two to three times a week is the target for most men. On off days, a warm water rinse and a light conditioner is sufficient.

**Oil is the daily step.** After washing or after your morning shower, apply beard oil while the hair is still slightly damp. Damp hair absorbs better than dry hair. Work through from root to tip, using the brush to distribute evenly. This takes under a minute and makes the single biggest difference in how a beard looks and feels throughout the day.

**Comb after oil.** A quality wooden comb or boar bristle brush distributes the oil further and trains the hair to lie in the direction you want. Most men who complain about their beard "not cooperating" haven't established a consistent combing direction. Thirty seconds every morning, done daily, corrects this within two weeks.

**Trim on a schedule, not on impulse.** Grabbing scissors whenever the beard looks messy leads to uneven results. Set a schedule: every two weeks for maintenance, monthly for a proper shaping session. Between visits to Bedbeards, keep a fine-toothed comb and small scissors for stray hairs only.

The routine doesn't need to be complicated. It needs to be done.`,
  },
  {
    id: 'b7',
    slug: 'beard-health-signs-you-need-a-specialist',
    date: 'September 22, 2023',
    readingTime: '5 min read',
    author: 'Ella Wilson',
    category: 'care',
    title: 'Beard Health: Signs You Need a Specialist',
    excerpt:
      'Persistent dryness, patchiness, and slow growth are not just cosmetic problems. They are symptoms with causes — and most of them are treatable.',
    image: '/images/beard-treatment-3.webp',
    imageBottom: false,
    content: `Most men tolerate a problematic beard rather than addressing it. They buy more products, try different techniques, and eventually settle for less than the beard they want. In the majority of cases, the underlying issue is diagnosable and fixable.

**Persistent itch after the initial grow-in phase.** In the first two to four weeks of beard growth, itch is normal — the skin is adjusting to new hair. But itch that continues after six weeks, or that returns despite regular oil application, usually indicates a skin barrier issue rather than a product problem. Ella Wilson, who trained in trichology, sees this frequently and addresses it at the skin level, not the hair level.

**Patchy growth that isn't hormonal.** Some patchiness is genetic. But patchiness that has developed over time, or that is accompanied by dry skin or redness, often has a nutritional or circulatory component. Stimulating treatments — targeted massage combined with active ingredients that increase follicle blood flow — can measurably improve density in affected areas over eight to twelve weeks.

**Breakage and split ends despite conditioning.** If your beard hair breaks when you comb it, or if split ends reappear quickly after trimming, the hair shaft itself is compromised. This is usually a protein deficiency issue — the beard isn't getting what it needs to build structural integrity. A deep conditioning treatment combined with a dietary assessment is the starting point.

**Slow or stalled growth.** Beard growth averages about half an inch per month. If yours is significantly slower, or if growth seems to have plateaued, the cause is worth investigating rather than accepting.

At Bedbeards, Ella Wilson specializes in these cases. A 45-minute diagnostic session covers skin condition, growth patterns, product history, and lifestyle factors, and produces a specific action plan rather than generic advice.`,
  },
  {
    id: 'b8',
    slug: 'the-fade-decoded',
    date: 'September 5, 2023',
    readingTime: '5 min read',
    author: 'Ava Harris',
    category: 'technique',
    title: 'The Fade Decoded: Skin, Low, Mid, High',
    excerpt:
      'Fade terminology gets thrown around loosely. Here is what each type actually means, how they work, and which one suits your face.',
    image: '/images/cuts-and-styling-1.webp',
    imageBottom: false,
    content: `Men ask for fades without always knowing what they're asking for. Barbers give fades without always explaining what they're doing. The result is a lot of appointments that go fine but not quite right.

**The skin fade.** The hair tapers all the way down to bare skin at the lowest point, usually at the temple and above the ear. Clean, high-contrast, and technically demanding because the transition from zero to any visible hair has to be seamless. Best on men with stronger jawlines and rectangular or oval face shapes — the high contrast of a skin fade amplifies the jaw rather than softening it.

**The low fade.** The fade line starts just above the ear, keeping most of the length and body of the cut while cleaning up the perimeter. The most versatile of the four types. Works on almost every face shape and pairs well with beards because the fade line doesn't compete with the beard's cheek line.

**The mid fade.** The transition begins at the temple, roughly halfway up the head. Sits between skin and high in terms of visual weight. Suits square and round faces particularly well because it creates length without the severity of a skin fade.

**The high fade.** Starts well above the temple, removing most of the sides and leaving volume concentrated on top. The most dramatic of the four. Works best on men with longer face shapes — the contrast between tight sides and volume on top can make a round face appear taller, but on an already-long face, it requires a careful balance.

**Fade and beard together.** The cheek line of your beard should connect logically to the fade — a skin fade that doesn't transition cleanly into the beard's edge looks unfinished. At Bedbeards, Ava Harris considers the beard and haircut as one composition and designs them to connect, not just coexist.`,
  },
  {
    id: 'b9',
    slug: 'why-the-barbershop-still-matters',
    date: 'August 19, 2023',
    readingTime: '4 min read',
    author: 'Max Thomas',
    category: 'culture',
    title: 'Why the Barbershop Still Matters',
    excerpt:
      'In a world where every grooming product is available online and every tutorial is on YouTube, the barbershop is doing something those things cannot replicate.',
    image: '/images/person-cutting-beard-to-man-2.webp',
    imageBottom: false,
    content: `There's a version of the barbershop argument that's purely nostalgic — the red-and-white pole, the old magazines, the smell of talc powder. That version is true but beside the point. The barbershop still matters for reasons that have nothing to do with nostalgia.

**Skill transfers differently in person.** You can watch a hundred YouTube tutorials about fade technique and still not understand what a good fade feels like from the inside of the chair. A barber who has been cutting for fifteen years isn't just performing a task — they're reading your head shape, your growth direction, the way your hair behaves when it's freshly washed versus a day old. That reading is not transferable through a screen.

**The consultation is the thing.** The ten minutes a good barber spends looking at you before picking up a tool are the ten minutes that separate a good cut from the right cut. Most home grooming misses this entirely because there's no one asking: what are you growing toward? What isn't working about the last cut? What does your lifestyle require of your hair?

**Accountability improves results.** When you come back to the same barber, they remember what they did before. They see what grew out well and what didn't. They adjust. This feedback loop, compounded over several visits, produces results that a solo grooming practice simply cannot replicate.

Max Thomas has been cutting hair for fifteen years. He has clients who have been coming to him for eight of those years. The cuts get better over time, not worse. That's not because he gets more practiced — it's because he gets more informed about that specific person's hair.

The barbershop matters because some things are still better done in person, by someone who takes it seriously.`,
  },
  {
    id: 'b10',
    slug: 'winter-beard-care',
    date: 'August 3, 2023',
    readingTime: '4 min read',
    author: 'Leo Mendez',
    category: 'care',
    title: 'Winter Beard Care: Protecting Your Beard Against the Season',
    excerpt:
      'Cold air, indoor heating, and wind create the worst possible conditions for beard skin. What to do about each of them.',
    image: '/images/men-with-nice-cut-and-beard-2.webp',
    imageBottom: false,
    content: `Winter is the hardest season for beard maintenance. The combination of cold outdoor air and dry indoor heating creates conditions that strip moisture from the skin faster than any other time of year. Most beard problems that show up in January started in November, when men didn't adjust their routine.

**Switch to a heavier oil or balm.** The light daily oil that works in summer is often insufficient in winter. When temperatures drop, shift to a heavier carrier — castor, sweet almond, or a blend that includes shea butter. Apply it twice daily rather than once: morning before you go outside, evening before the skin dries out overnight.

**Protect exposed skin.** Cold wind is abrasive. At the cheeks, neck, and any area where the beard is thinner, wind damage accumulates. A light beard balm applied to exposed areas before going outside acts as a barrier. This is particularly important for men with shorter or patchier beards where the skin has less coverage.

**Combat indoor heating dryness.** Central heating reduces humidity, and low-humidity air pulls moisture from the skin continuously. A small humidifier in your bedroom (where you spend eight hours a night) makes a measurable difference to beard hydration by morning. It's not a grooming product, but it functions like one.

**Don't skip trims because you're 'growing it out' for winter.** The logic of growing a longer beard for warmth is sound, but longer beards need more maintenance, not less. Split ends and breakage compound in dry conditions. A monthly trim through winter keeps the beard growing in better condition than letting it go.

The beard that looks great in winter is the one that was managed well in fall. Adjust early.`,
  },
  {
    id: 'b11',
    slug: 'reading-your-face-shape',
    date: 'July 15, 2023',
    readingTime: '5 min read',
    author: 'Ava Harris',
    category: 'style',
    title: 'Reading Your Face Shape Before You Cut',
    excerpt:
      "Face shape is the first thing a good barber assesses. Understanding yours means understanding why certain cuts and beards work for you and others don't.",
    image: '/images/men-with-nice-cut-and-beard-4.webp',
    imageBottom: false,
    content: `Face shape is not a rigid categorization system — it's a shorthand for identifying proportions and planning how to work with or against them. Most men have faces that approximate one of six shapes, and most fall somewhere between two of them.

**Oval.** The face is longer than it is wide, with the widest point at the cheekbones and relatively balanced forehead and jaw width. Considered the most versatile shape because proportions are already well-balanced. The goal with an oval face is not to correct anything — it's to choose a cut that doesn't interrupt a good thing. Most styles work. The trap is going too long on top, which over-lengthens an already long face.

**Square.** A strong, wide jaw approximately equal in width to the forehead, with a flat top of the head. The square face reads as powerful and structured. The aim is usually to soften the jaw without hiding it. Rounded cuts, mid-length top length, and a beard that adds some fullness at the chin all serve this shape. Avoid very angular cuts that emphasize corners.

**Round.** Width and height are approximately equal. The goal is to create the illusion of length. High-contrast fades, volume on top, a beard that is longer at the chin and shorter at the sides — all of these add visual length. Avoid wide, full beards that add width to a face that already has it.

**Rectangle/Oblong.** Long and narrow, with similar width at the forehead and jaw. The aim is to add width. Fuller beards, textured tops, and less length on top all work in favor of this shape.

**Diamond.** Narrow forehead and jaw, wide cheekbones. Unusual and well-suited to styles that add width at the forehead. Bangs or fringe, side-parted cuts, or fuller facial hair at the jaw all balance the cheekbone-dominated width.

**Triangle.** Narrow forehead, wide jaw. The least common but manageable with the right volume distribution. More volume at the crown and temples, controlled beard width at the jaw.

Ava Harris maps face shape at the start of every consultation. It takes less than a minute and determines the entire direction of the appointment.`,
  },
  {
    id: 'b12',
    slug: 'growing-a-beard-with-intention',
    date: 'June 28, 2023',
    readingTime: '5 min read',
    author: 'Ella Wilson',
    category: 'style',
    title: 'Growing a Beard with Intention',
    excerpt:
      'Most men grow beards by neglect. The men with exceptional beards grow them by design — knowing from week one what they are building toward.',
    image: '/images/men-with-nice-cut-and-beard-7.webp',
    imageBottom: false,
    content: `There is a difference between letting a beard grow and growing a beard. The first produces whatever comes in. The second produces what you were aiming for. The difference is intention, and intention starts before the first week.

**Define the endpoint before you start.** A beard without a target length and shape will drift — you'll trim here and there without a plan, and six months later you'll have something that doesn't reflect any coherent decision. Spend five minutes before you start thinking about what you're building: what length, what shape at the cheek line, what the beard does to your face shape. A consultation at Bedbeards before you start growing costs you nothing but fifteen minutes, and it sets the direction for the next six months.

**Weeks one through four are the hardest and the least indicative.** Early beard growth is patchy, itchy, and generally discouraging. Almost none of what you see in the first four weeks predicts what the finished beard will look like. Resist the urge to trim into shape too early — let it grow past the awkward phase before you assess what you have.

**The first proper shaping appointment.** At around six to eight weeks, when you have enough beard to work with, book a shaping session. This is where the cheek line and neckline are established, the density and growth pattern are assessed, and any adjustments to the growth plan are made based on what's actually growing in. The beard you build from here will be intentional.

**Maintain the neckline, not the shape.** Between appointments, the neckline needs attention every one to two weeks — it grows quickly and when it's undefined, it collapses the jaw line and makes the beard look unkempt regardless of the quality of the rest of it. The cheek line and general shape should be left for the professional appointment. Touching the cheek line at home without good tools and a clear plan is the fastest way to undo the shaping session you just paid for.

The best beards are not grown accidentally. They are designed, maintained, and built over time with some thought behind them.`,
  },
];

export const blogSection = {
  sectionTag: 'Blog',
  headline: 'Grooming Tips,\nTrends, and More',
  description:
    'Stay updated with the latest in beard care, mustache grooming, and barbering trends. Our blog is packed with helpful tips, product reviews, and expert advice to keep your look sharp.',
};

export const cta = {
  headline: 'Book Your\nAppointment Today!',
  description:
    "Don't wait to get the perfect beard or haircut. Our expert barbers are ready to give you a fresh, personalized look. Book now and step up your grooming game!",
  cta: 'Book Now',
  background: '/images/cta-background.webp',
};

// ─── About Page ────────────────────────────────────────────────────────────

export const aboutPage = {
  hero: {
    sectionTag: 'About us',
    headline: 'The Studio\nBehind the Blade',
    image: '/images/business-place.webp',
  },
  story: {
    headline: 'Where We Started',
    paragraphOne:
      "Bedbeards opened in 2018 with a single chair, four pairs of scissors, and one conviction: that men deserve a barbershop that treats grooming as a craft, not a transaction. Our founder had spent years in shops that were either too rushed to do good work or too pretentious to feel like a real place. Bedbeards was built as the alternative.",
    paragraphTwo:
      "Six years later, four barbers work out of our studio, each with a specialty that covers everything from precision sculpting to beard health treatments. The chair count has grown. The conviction hasn't changed.",
    image: '/images/about-1.webp',
  },
  values: [
    {
      id: 'v1',
      title: 'Precision',
      description: 'Every edge deliberate. Every fade considered. We do not rush, and we do not approximate.',
    },
    {
      id: 'v2',
      title: 'Consistency',
      description: 'The third visit should be as good as the first. We document your cuts and keep detailed notes so your barber knows your history.',
    },
    {
      id: 'v3',
      title: 'Honesty',
      description: "We tell you what your beard needs, not what you want to hear. That's what earns a regular client.",
    },
  ] as StudioValue[],
  space: {
    headline: 'The Space',
    description:
      'Our studio was designed around the work. Good light, clean surfaces, zero distractions. The music is always right, the products are always real, and the conversation is always optional.',
    images: ['/images/place-1.webp', '/images/place-2.webp', '/images/place-3.webp', '/images/place-4.webp', '/images/place-5.webp'],
  },
};

// ─── Services Page ─────────────────────────────────────────────────────────

export const servicePricing: ServicePricing[] = [
  { id: 'sp1', serviceId: 'cuts', name: 'Beard Trim', price: '$30', duration: '30 min', description: 'Shape, edge, and finish.' },
  { id: 'sp2', serviceId: 'cuts', name: 'Beard Sculpt', price: '$50', duration: '45 min', description: 'Full structural shaping with hot towel finish.' },
  { id: 'sp3', serviceId: 'cuts', name: 'Haircut', price: '$40', duration: '45 min', description: 'Scissor or clipper cut with styling.' },
  { id: 'sp4', serviceId: 'cuts', name: 'Haircut + Beard', price: '$75', duration: '75 min', description: 'Full service: cut, sculpt, finish.' },
  { id: 'sp5', serviceId: 'treatments', name: 'Hydration Treatment', price: '$45', duration: '40 min', description: 'Deep moisture therapy for dry or brittle beards.' },
  { id: 'sp6', serviceId: 'treatments', name: 'Stimulating Treatment', price: '$55', duration: '50 min', description: 'Circulation-boosting scalp and beard massage.' },
  { id: 'sp7', serviceId: 'treatments', name: 'Full Care Package', price: '$90', duration: '90 min', description: 'Hydration + stimulation + hot towel + styling.' },
  { id: 'sp8', serviceId: 'products', name: 'Product Consultation', price: 'Free', duration: '15 min', description: 'Personalized product recommendation with purchase.' },
];

export const servicesPage = {
  hero: {
    sectionTag: 'Services',
    headline: 'Craft Delivered\nEvery Time',
    image: '/images/service-cuts-and-styling.webp',
  },
  faq: [
    {
      q: 'Do I need to book in advance?',
      a: 'We recommend booking at least 48 hours ahead, especially for weekend slots. Walk-ins are welcome when chairs are open.',
    },
    {
      q: 'How long does a full session take?',
      a: 'A haircut and beard sculpt together runs about 75 minutes. Treatments vary from 40 to 90 minutes depending on the package.',
    },
    {
      q: 'Can I request a specific barber?',
      a: 'Yes. Each barber has a specialty; we recommend booking with the one whose focus matches your goals.',
    },
    {
      q: 'What products do you use?',
      a: 'We use a curated selection of professional-grade oils, waxes, and shampoos — the same ones available in our product catalog.',
    },
  ],
};

// ─── Gallery Page ──────────────────────────────────────────────────────────

export const galleryItems: GalleryItem[] = [
  { id: 'g1',  image: '/images/men-with-nice-cut-and-beard-1.webp',  alt: 'Precision beard sculpt with clean fade', category: 'beards' },
  { id: 'g2',  image: '/images/men-with-nice-cut-and-beard-2.webp',  alt: 'Full beard with defined cheek lines', category: 'beards' },
  { id: 'g3',  image: '/images/cuts-and-styling-1.webp',             alt: 'Tight fade haircut, side profile', category: 'cuts' },
  { id: 'g4',  image: '/images/cuts-and-styling-2.webp',             alt: 'Classic crop with textured top', category: 'cuts' },
  { id: 'g5',  image: '/images/men-with-nice-cut-and-beard-3.webp',  alt: 'Goatee with clean shaved cheeks', category: 'beards' },
  { id: 'g6',  image: '/images/beard-treatment-1.webp',              alt: 'Hot towel beard treatment in progress', category: 'treatments' },
  { id: 'g7',  image: '/images/men-with-nice-cut-and-beard-4.webp',  alt: 'Van Dyke style with sharp edges', category: 'beards' },
  { id: 'g8',  image: '/images/cuts-and-styling-3.webp',             alt: 'Pompadour with skin fade', category: 'cuts' },
  { id: 'g9',  image: '/images/beard-treatment-2.webp',              alt: 'Hydration treatment application', category: 'treatments' },
  { id: 'g10', image: '/images/men-with-nice-cut-and-beard-5.webp',  alt: 'Full beard, styled and finished', category: 'beards' },
  { id: 'g11', image: '/images/person-cutting-beard-to-man-1.webp',  alt: 'Barber trimming beard edges', category: 'cuts' },
  { id: 'g12', image: '/images/men-with-nice-cut-and-beard-6.webp',  alt: 'Short beard with tapered cheek fade', category: 'beards' },
  { id: 'g13', image: '/images/beard-treatment-3.webp',              alt: 'Post-treatment beard conditioning', category: 'treatments' },
  { id: 'g14', image: '/images/person-cutting-beard-to-man-2.webp',  alt: 'Precision haircut side profile', category: 'cuts' },
  { id: 'g15', image: '/images/men-with-nice-cut-and-beard-7.webp',  alt: 'Stubble with defined neckline', category: 'beards' },
  { id: 'g16', image: '/images/person-cutting-beard-to-man-3.webp',  alt: 'Barber finishing haircut with scissors', category: 'cuts' },
  { id: 'g17', image: '/images/men-with-nice-cut-and-beard-8.webp',  alt: 'Classic handlebar mustache', category: 'beards' },
  { id: 'g18', image: '/images/treatment-beard.webp',                alt: 'Beard oil treatment application', category: 'treatments' },
];

export const galleryPage = {
  hero: {
    sectionTag: 'Gallery',
    headline: 'The Work\nSpeaks Clearly',
    image: '/images/men-with-nice-cut-and-beard-10.webp',
  },
};

// ─── Products Page ─────────────────────────────────────────────────────────

export const products: Product[] = [
  { id: 'p1',  name: 'Signature Beard Oil', category: 'oil',     tagline: 'Daily nourishment for every beard type', description: 'A light, fast-absorbing oil with jojoba and argan. Hydrates the skin, softens the beard, and eliminates itch without leaving residue.', image: '/images/product-1.webp' },
  { id: 'p2',  name: 'Heavy Hold Wax',      category: 'wax',     tagline: 'All-day control, clean finish',          description: 'Firm hold for structured styles. Beeswax base with a matte finish that holds through humidity without flaking.',                          image: '/images/product-2.webp' },
  { id: 'p3',  name: 'Sculpting Balm',      category: 'balm',    tagline: 'Shape and condition in one step',        description: 'Medium hold balm that conditions while it styles. Ideal for taming frizz and defining the beard\'s natural texture.',               image: '/images/product-3.webp' },
  { id: 'p4',  name: 'Deep Clean Shampoo',  category: 'shampoo', tagline: 'Removes buildup, preserves oils',        description: 'Sulfate-free formula that cleans without stripping. Removes product buildup while preserving the beard\'s natural moisture barrier.',  image: '/images/product-4.webp' },
  { id: 'p5',  name: 'Cedar Beard Oil',     category: 'oil',     tagline: 'Rich scent, serious conditioning',       description: 'A heavier-weight oil for dry or coarse beards. Castor and sweet almond base with cedar and sandalwood.',                                image: '/images/product-5.webp' },
  { id: 'p6',  name: 'Matte Clay Wax',      category: 'wax',     tagline: 'Texture and separation for short beards', description: 'A soft clay formula that adds definition to short, brushed-out beards without shine. Works well on stubble and close trims.',        image: '/images/product-6.webp' },
  { id: 'p7',  name: 'Conditioning Balm',   category: 'balm',    tagline: 'Overnight repair treatment',             description: 'Thick conditioning balm applied before bed. Repairs split ends and restores softness to beards that have taken damage from heat or cold.', image: '/images/product-8.webp' },
  { id: 'p8',  name: 'Gentle Beard Wash',   category: 'shampoo', tagline: 'For sensitive skin under the beard',     description: 'A fragrance-free, pH-balanced wash developed for men with reactive skin or early beard itch. Soft on the follicle, effective on buildup.',  image: '/images/product-9.webp' },
  { id: 'p9',  name: 'Hydra Serum Oil',     category: 'oil',     tagline: 'Intensive hydration for patchy beards',  description: 'A concentrated serum-oil hybrid with vitamin E and rosehip. Applied to problem areas for targeted hydration and growth support.',         image: '/images/product-10.webp' },
  { id: 'p10', name: 'Firm Hold Pomade',    category: 'wax',     tagline: 'Traditional pomade, modern finish',      description: 'Water-based pomade with strong hold and a natural shine. Combs through easily, washes out cleanly.',                                  image: '/images/product-13.webp' },
  { id: 'p11', name: 'Travel Kit',          category: 'tool',    tagline: 'The full routine, travel-ready',         description: 'Miniature versions of our four core products: signature oil, sculpting balm, deep clean shampoo, and matte clay wax in a canvas pouch.', image: '/images/product-14.webp' },
  { id: 'p12', name: 'Beard Comb Set',      category: 'tool',    tagline: 'Sandalwood combs, three widths',         description: 'Hand-finished sandalwood combs in fine, medium, and wide tooth. Distributes oil evenly and reduces static without breaking the beard.',    image: '/images/product-15.webp' },
];

export const productsPage = {
  hero: {
    sectionTag: 'Products',
    headline: 'Grooming\nEssentials',
    image: '/images/premium-grooming-essential-1.webp',
  },
  intro: 'Every product in our catalog is something we use in the studio. We carry what works, not what sells.',
};

// ─── Contact Page ──────────────────────────────────────────────────────────

export const contactPage = {
  hero: {
    sectionTag: 'Contact',
    headline: 'Come In,\nSit Down',
    image: '/images/business-place.webp',
  },
  hours: [
    { day: 'Monday', time: 'Closed' },
    { day: 'Tuesday', time: '9:00 AM – 7:00 PM' },
    { day: 'Wednesday', time: '9:00 AM – 7:00 PM' },
    { day: 'Thursday', time: '9:00 AM – 8:00 PM' },
    { day: 'Friday', time: '9:00 AM – 8:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 6:00 PM' },
    { day: 'Sunday', time: '10:00 AM – 4:00 PM' },
  ],
};

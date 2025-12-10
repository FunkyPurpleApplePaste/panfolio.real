// src/data.js

export const skills = [
  'Rapid Prototyping', 'Luau / Roblox',
  'JavaScript / TS', 'Python', 'C# / C++ Game Logic',
  'UI/UX Design', 'REACT / JSX', 'App Development', 'Web Design'
];

export const workflow = [
  'Prototype → Test → Iterate fast',
  'Player-focused feedback loops',
  'Custom pipelines & editor tools',
  'Polish with responsive UX',
  'Modular, scalable systems',
];

/**
 * projectsData
 * - This is the canonical source for full project pages.
 * - Fields available: id, title, period, tag, image, desc, role, highlight,
 *   notes, quote, subtitleOverview, gallery (array), extraSections (array).
 */
export const projectsData = [

{
  id: 'portfolio-website',
  title: 'PORTFOLIO WEBSITE',
  period: '2025',
  tag: 'React • Web Design • Front-End Architecture',
  image: '/assets/portfolio/Picture1.png',
  shortDesc:
    'A responsive, animated portfolio showcasing interactive design and modular React components — built to grow alongside my work.',
  desc:
    'A full redesign of my personal portfolio focused on motion, clarity, and modularity. The site blends playful glassmorphism with clean typography, responsive layouts, and lightweight reveal animations. Built entirely in React with reusable components, a custom UI system, and CSS variables for maintainability. Each interaction — from the navbar blur to cube animations — reinforces a unified design language that feels alive and personal.',
  role: 'Designer & Developer',
  highlight:
    'Fully custom React architecture, soft animated backgrounds, floating cube system, and dynamic modal project pages with tilt and motion interactivity.',
  notes:
    'Every part of the site — from motion timing to cube layering — was handcrafted. Built with Tailwind and custom CSS for total control over style, performance, and polish. The site is continuously iterated as both a design canvas and technical experiment.',
  quote:
    '“A portfolio isn’t just a showcase — it’s the interface to who you are.”',
  subtitleOverview: 'Design, architecture, and motion',
  gallery: [
    '/assets/portfolio/Picture1.png',
    '/assets/portfolio/Picture2.png',
    '/assets/portfolio/Picture3.png',
    '/assets/portfolio/Picture4.png'
  ],
  extraSections: [
    {
      title: 'Visual Identity',
      subtitle: 'Tone, motion & atmosphere',
      content:
        'Designed around a dark glass aesthetic accented by neon magenta gradients and floating geometry. The visual tone blends calm focus with creative energy, echoing my design ethos — minimal structure, expressive motion.'
    },
    {
      title: 'Technical Core',
      subtitle: 'React system & UI design',
      content:
        'Built from scratch using React with a modular component architecture. Includes a responsive Navbar with mobile menu, Masonry layout for projects, animated modals with tilt-based depth, and smooth scroll reveal hooks — all optimized for clarity and fluid motion.'
    },
    {
      title: 'Interactive Layer',
      subtitle: 'Backgrounds & ambience',
      content:
        'Introduces dynamic ambient layers: a soft light background, floating cubes, and subtle parallax hero cards — each element responding to user motion for a sense of space and continuity.'
    },
    {
      title: 'Iterative Growth',
      subtitle: 'Living documentation',
      content:
        'The portfolio serves as a living record of my evolving visual language and technical approach. Each revision refines usability, motion, and storytelling — ensuring the site always reflects my current design mindset.'
    }
  ]
}
,

  {
    id: 'fight-on-hight',
    title: 'FIGHT ON HIGHT',
    period: '2022 - Ongoing',
    tag: 'Semi-Randomizer • Combat',
    image: '/assets/Picture1.png',
    shortDesc: 'A randomizer fighting game featuring unique gameplay mechanics such as classes, powers, and abilities. Includes multiple maps, gamemodes, and interactive map gimmicks. This project is live and gets regular updates.',
    desc: 'FIGHT ON HIGHT is a multiplayer semi-randomizer fighting game on Roblox, designed to keep every match fresh and unpredictable. Players choose from a hand of three randomly offered classes at spawn, each with a unique moveset and special gimmick that rewards skill and experimentation. On top of that, players also select one ability from a hand of three—these can be passive or active—further adding to the strategic depth and randomness of each round.',
    role: 'Designer & Systems Programmer',
    highlight: 'Class-and-ability randomization combined with modular map gimmicks create a constantly shifting gameplay experience.',
    notes: 'Implemented class selection system, special ability randomizer, balancing loops, and dynamic map interactions. Focused on replayability, emergent combos, and providing players with multiple ways to approach each match. This project evolved over time, reflecting continuous improvements and experimentation with new mechanics.',
    quote: '“Designed to force players to adapt — every round is a fresh conversation.”',
    subtitleOverview: 'PROJECT OVERVIEW',
    gallery: [
      '/assets/fohgallery/Picture1.png',
      '/assets/fohgallery/Picture2.png',
      '/assets/fohgallery/Picture3.png',
      '/assets/fohgallery/Picture4.png',
      '/assets/fohgallery/Picture5.png',
      '/assets/fohgallery/Picture6.png',
      '/assets/fohgallery/Picture7.png',
    ],
    extraSections: [
      { 
        title: 'Gameplay Systems', 
        subtitle: 'Core systems & rules', 
        content: 'Players select one class from a hand of three, each with unique movesets and mechanics. They then choose one ability from a separate hand, adding extra strategy and variety. Maps and gamemodes are randomly chosen each round, with interactive map gimmicks that alter how players approach combat.' 
      },
      { 
        title: 'Technical Design', 
        subtitle: 'Tech choices & implementation', 
        content: 'Built in Roblox using Luau scripts for deterministic randomization, class and ability management, and networked state reconciliation. Custom animation hooks and modular map interactions were implemented to maximize replayability and emergent gameplay opportunities.' 
      },
      { 
        title: 'Development Journey', 
        subtitle: 'A personal growth project', 
        content: 'FIGHT ON HIGHT started as a personal project driven by a desire to learn game development. Over the years, it has evolved into a collection of experiments and experiences, gradually incorporating more unique features, mechanics, and systems. Each update reflects lessons learned and experimentation in balancing randomness, strategy, and fun.' 
      }
    ]
},


  {
    id: 'hight-praeteritum',
    title: 'HIGHT PRAETERITUM',
    period: '2024 - Ongoing',
    tag: 'Lore • Worldbuilding',
    image: '/assets/Picture2.png',
    shortDesc: 'A lore compendium of fragments in the FIGHT ON HIGHT universe, written from various characters’ perspectives.',
    desc: 'HIGHT PRAETERITUM is a curated compendium of the FIGHT ON HIGHT universe, designed to bring coherence to a world that had grown organically over years. It contains first-person recounts, third-person narratives, and assorted in-universe media, each piece acting as a fragment of the world. The compendium encourages exploration and repeated reading, revealing hidden connections and deeper context over time.',
    role: 'Writer & Worldbuilder',
    highlight: 'Non-linear, interleaved fragments that reveal the world through multiple perspectives, creating an immersive and layered reading experience.',
    notes: 'Developed narrative beats, stitched together chronology, and implemented a layered reveal system that allows new lore drops without breaking continuity. The compendium preserves prior creative work while expanding the universe organically.',
    quote: '“Fragments that speak louder when read together.”',
    subtitleOverview: 'Narrative design & approach',
    gallery: [
      '/assets/praegallery/Picture1.png',
      '/assets/praegallery/Picture2.png',
      '/assets/praegallery/Picture3.png',
      '/assets/praegallery/Picture4.png',
      '/assets/praegallery/Picture5.png'
    ],
    extraSections: [
      { 
        title: 'Chronology', 
        subtitle: 'Timeline notes', 
        content: 'Events are presented non-linearly to reward repeated reading. Each fragment can be experienced independently, yet patterns and connections emerge over time, creating a richer understanding of the world.' 
      },
      {
        title: 'Narrative Fragments',
        subtitle: 'Multi-perspective storytelling',
        content: 'The compendium includes first-person accounts from characters, third-person histories, and various in-universe artifacts (letters, journals, reports). This approach allows the world to feel lived-in, layered, and discoverable, rather than a single static story.'
      },
      {
        title: 'Creative Intent',
        subtitle: 'Why this compendium exists',
        content: 'HIGHT PRAETERITUM was created to solidify the FIGHT ON HIGHT lore, which had previously been scattered and ephemeral. It provides a structured, yet flexible, way for readers to explore the universe, making it easier to introduce new characters, events, and mysteries without breaking continuity.'
      }
    ]
},


  {
    id: 'ark-corporation',
    title: 'ARK CORPORATION',
    period: '2025 - Ongoing',
    tag: 'Turn-Based • Strategy',
    image: '/assets/Picture3.png',
    shortDesc: 'A turn-based strategy game featuring lore characters as playable units, with drag-and-drop targeting and modular abilities. Currently in the early development phase.',
    desc: 'ARK CORPORATION is a turn-based combat and strategy game that brings characters from the FIGHT ON HIGHT universe into tactical battles. Players select units from various factions, each with unique abilities, playstyles, and gimmicks—ranging from defensive tactics to status effects like burn. The system encourages creative strategies and emergent gameplay, allowing players to experiment with unconventional combos and approaches to overcome enemy challenges.',
    role: 'Lead Systems Designer',
    highlight: 'Modular ability cards, drag-and-drop targeting, and diverse unit mechanics that enable deep tactical play and emergent strategies.',
    notes: 'Focused on creating an intuitive UX for turn-based combat, with predictable RNG windows, clear failure states, and strategic depth. Each unit’s unique style encourages players to experiment with creative tactics. Although the game is still in active development, it is designed to support a growing roster of characters and emergent interactions.',
    quote: '“Give players predictable tools and surprising combinations.”',
    subtitleOverview: 'Gameplay systems & UX',
    gallery: [
      '/assets/arkgallery/Picture1.png',
      '/assets/arkgallery/Picture2.png',
      '/assets/arkgallery/Picture3.png',
      '/assets/arkgallery/Picture4.png',
      '/assets/arkgallery/Picture5.png'
    ],
    extraSections: [
      { 
        title: 'Combat Loop', 
        subtitle: 'Round structure', 
        content: 'Turn phases: plan, execute, resolve — with interactive interrupts and opportunities for tactical adjustments.' 
      },
      { 
        title: 'Unit Design', 
        subtitle: 'Playable factions & gimmicks', 
        content: 'Each unit represents a faction or group from the lore and has its own gameplan or playstyle. Examples include defensive units, burn-inflicting units, and others with unique mechanics that challenge players to adapt their strategies.' 
      },
      { 
        title: 'Strategic Depth', 
        subtitle: 'Emergent gameplay', 
        content: 'The combination of unit abilities, enemy gimmicks, and turn-based planning encourages players to develop unconventional strategies. Success requires understanding unit interactions, exploiting strengths, and creatively responding to challenges.' 
      },
      { 
        title: 'Development Status', 
        subtitle: 'Ongoing project', 
        content: 'ARK CORPORATION is a work-in-progress. The focus is on iteratively expanding the roster, refining mechanics, and creating systems that support deep strategy and player creativity.' 
      }
    ]
},

  {
    id: 'oceanborne',
    title: 'OCEANBORNE',
    period: '2022 - 2023',
    tag: 'Open World • Exploration • Combat',
    image: '/assets/oceanpic.png',
    shortDesc: 'An open-world ocean exploration and combat game with permadeath, multiple playstyles, and rich lore.',
    desc: 'OCEANBORNE is an open-world exploration and combat game set across a vast ocean, where players navigate islands, discover points of interest, and engage in dynamic gameplay loops. Players can choose combat-focused strategies—hunting others for money and experience—or exploration-focused play, seeking treasures, rare items, and knowledge. NPCs offer class training, new abilities, and weapons, and can also advance players into enhanced classes, allowing diverse progression paths.',
    role: 'Designer & Systems Programmer',
    highlight: 'Permadeath mechanics, open-world exploration, and multiple progression paths via class trainers, combat, and discovery.',
    notes: 'Designed layered gameplay systems to accommodate different playstyles: combat-centric, exploration-centric, and hybrid approaches. Implemented gear, item, and NPC distribution across a procedurally inspired ocean world. Developed class advancement and ability progression systems for replayability.',
    quote: '“Sail, fight, explore—every journey can take you somewhere new.”',
    subtitleOverview: 'Game loop & player experience',
    gallery: [
      '/assets/oceangallery/Picture1.png',
      '/assets/oceangallery/Picture2.png',
      '/assets/oceangallery/Picture3.png',
      '/assets/oceangallery/Picture4.png'
    ],
    extraSections: [
      { 
        title: 'Gameplay Loop', 
        subtitle: 'Exploration & progression', 
        content: 'Players spawn into the world, explore islands and points of interest, gather treasures, money, food, and items, interact with NPCs for training and class advancement, and continue exploring. The loop supports combat, exploration, and resource management playstyles.' 
      },
      { 
        title: 'Classes & Abilities', 
        subtitle: 'Character growth', 
        content: 'NPC trainers allow players to learn new abilities and weapons. Certain NPCs can advance a player’s current class into a more powerful or specialized class, offering meaningful choices in progression and playstyle.' 
      },
      { 
        title: 'World & Lore', 
        subtitle: 'Factions and races', 
        content: 'The game features diverse races and factions in a lore-rich world separate from the FIGHT ON HIGHT universe. Various points of interest, scattered gear, and dynamic NPC encounters make the world feel alive and rewarding to explore.' 
      },
      { 
        title: 'Playstyle Variety', 
        subtitle: 'Combat vs. exploration', 
        content: 'Players can pursue combat-focused gameplay by hunting others and earning experience through battle, or exploration-focused gameplay by discovering treasures, rare items, and lore. Both paths provide rewarding progression and emergent strategies.' 
      }
    ]
},

{
    id: 'dustborne',
    title: 'DUSTBORNE',
    period: '2025 - Cancelled',
    tag: 'Open World • Exploration • Combat',
    image: '/assets/dustpic.png',
    shortDesc: 'A prototype open-world exploration/combat game set in the same universe as OCEANBORNE, but in a dried, post-ocean landscape.',
    desc: 'DUSTBORNE was an experimental continuation of the OCEANBORNE universe, exploring the same gameplay loop—spawn, explore, gather resources, interact with NPCs, and progress through classes—but in a drastically transformed, arid world. The familiar yet altered environment allowed testing of new environmental hazards, resource scarcity mechanics, and alternative worldbuilding opportunities.',
    role: 'Designer & Systems Programmer',
    highlight: 'Explored environmental storytelling, survival mechanics, and reimagined progression in a post-ocean landscape.',
    notes: 'Although the project was ultimately cancelled, it served as a valuable prototype for understanding how changing the environment impacts exploration and progression loops. Tested new hazards, loot placement, and class adaptation in a harsh, dried-world setting.',
    quote: '“Familiar worlds can feel entirely new when the tides are gone.”',
    subtitleOverview: 'Prototype exploration & experimental design',
    gallery: [
      '/assets/dustgallery/Picture1.png',
      '/assets/dustgallery/Picture2.png',
      '/assets/dustgallery/Picture3.png',
      '/assets/dustgallery/Picture4.png'
    ],
    extraSections: [
      { 
        title: 'Gameplay Loop', 
        subtitle: 'Exploration & progression', 
        content: 'Maintained OCEANBORNE’s loop of exploration, resource gathering, and NPC interaction, while experimenting with survival mechanics and environmental hazards unique to a dried-out world.' 
      },
      { 
        title: 'Environmental Design', 
        subtitle: 'Reimagining the world', 
        content: 'The familiar OCEANBORNE universe was transformed into a harsh, arid landscape. This allowed testing of player navigation challenges, scarce resources, and environmental storytelling, while keeping the core gameplay loop intact.' 
      },
      { 
        title: 'Prototype Purpose', 
        subtitle: 'Learning & experimentation', 
        content: 'DUSTBORNE was intended as a prototype to explore emergent gameplay in a drastically changed environment. Though cancelled, the project informed future design decisions and provided insight into class progression and exploration loops in extreme conditions.' 
      }
    ]
},

{
    id: 'lifeweaver',
    title: 'LIFEWEAVER',
    period: '2025',
    tag: 'UI/UX • Web Design • Prototype',
    image: '/assets/lifeweaver/Picture1.png',
    shortDesc: 'A high-fidelity Figma prototype for a sustainable clothing brand website, created around the concept of LifeWeaver.',
    desc: 'The objective was to design a website for a sustainable clothing brand — and from that brief, LifeWeaver was created. LifeWeaver is a conceptual brand centered on ethical fashion, environmental awareness, and mindful living. The project explores how interface design and brand identity can communicate sustainability through layout, tone, and visual style. The high-fidelity Figma prototype focuses on clarity, organic design, and smooth user experience.',
    role: 'UI/UX Designer',
    highlight: 'High-fidelity prototype built in Figma emphasizing sustainability-driven branding and clean, intuitive interaction design.',
    notes: 'Developed a cohesive design system including color palette, typography, and reusable components. Created user flows for browsing, product discovery, and sustainability storytelling. Focused on usability and emotional design to reflect the brand’s mindful values.',
    quote: '“Designing with empathy — for people, for purpose, for the planet.”',
    subtitleOverview: 'Interface design & brand philosophy',
    gallery: [
      '/assets/lifeweaver/Picture1.png',
      '/assets/lifeweaver/Picture2.png',
      '/assets/lifeweaver/Picture3.png',
      '/assets/lifeweaver/Picture4.png',
      '/assets/lifeweaver/Picture5.png'
    ],
    extraSections: [
      { 
        title: 'Objective', 
        subtitle: 'Project brief', 
        content: 'Create a website for a sustainable clothing brand that embodies eco-conscious values through design. LifeWeaver was conceptualized to meet this objective, blending brand identity, user empathy, and modern web aesthetics.' 
      },
      { 
        title: 'Design Concept', 
        subtitle: 'Brand vision', 
        content: 'LifeWeaver’s identity is rooted in sustainability and mindfulness. The interface uses soft color palettes, calm typography, and clean spacing to evoke comfort and trust, while reinforcing the brand’s eco-conscious message.' 
      },
      { 
        title: 'User Experience', 
        subtitle: 'Flow & usability', 
        content: 'The prototype focuses on clear navigation and a seamless browsing experience. Designed responsive layouts and product interactions that feel organic and intuitive across devices.' 
      },
      { 
        title: 'UI Design System', 
        subtitle: 'Structure & consistency', 
        content: 'Built a Figma component system to ensure scalable consistency. The system includes reusable modules, responsive grids, and an earth-toned palette to maintain harmony across pages.' 
      }
    ]
},


];


/**
 * heroSlides
 * - Used by the hero carousel. Derived from projectsData so images/titles stay in sync.
 */
export const heroSlides = projectsData.map(p => ({
  id: p.id,
  title: p.title,
  subtitle: p.tag || p.subtitleOverview || p.subtitle || '',
  image: p.image
}));

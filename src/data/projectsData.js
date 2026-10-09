import { asset } from '../utils/asset.js';

export const projects = [

  {
    title: 'LOTO VR Training',
    image: asset('/projects/loto-vr.jpg'),

    description:
      'Interactive VR-based industrial safety training application that simulates Lockout/Tagout procedures, equipment isolation, maintenance activities, and system restoration.',

    overview: [
      'Developed an immersive Lockout/Tagout (LOTO) safety training application using Unity and C#.',
      'Simulated a complete industrial workflow, from equipment isolation and valve closure to maintenance and system restoration.',
      'Designed step-by-step training scenarios to guide users through the LOTO procedure in the correct sequence.',
      'Created an interactive industrial environment with equipment, valves, control elements, and maintenance areas.',
      'Enabled users to perform safety procedures through hands-on VR interactions with equipment and environment elements.'
    ],

    feature: [
      'Interactive VR equipment and valve interactions.',
      'Step-by-step Lockout/Tagout training workflow covering equipment isolation, valve closure, maintenance, and system restoration.',
      'Gameplay systems for validating required actions and controlling training progression.',
      'UI systems for instructions, task information, feedback, and training progression.',
      'NPC-driven dialogue interactions providing step-by-step training instructions.',
      'Animations for equipment operations and guided training events.',
      'Event-driven systems connecting user interactions, gameplay events, UI updates, and training activities.',
      'Feedback mechanisms for completed, incorrect, and required actions.',
      'Multi-language support for regional training experience.'
    ],

    contribution: [
      'Developed core VR interaction systems and gameplay logic using Unity and C#.',
      'Implemented interactive equipment, valves, objects, and environment interactions for LOTO scenarios.',
      'Developed the workflow logic for equipment isolation, maintenance, and system reset procedures.',
      'Implemented NPC-driven dialogue interactions for delivering instructions and guiding user actions.',
      'Integrated UI elements for task instructions, progress, and user feedback.',
      'Implemented animations and event-based interactions for equipment operations and training scenarios.',
      'Developed and integrated industrial environment elements for the VR training experience.',
      'Optimized VR interactions and application performance for Meta Quest devices.'
    ],

    technologies: 'UNITY · C# · META SDK INTERACTION TOOLKIT · META QUEST · VR',
    link: '/projects/loto-vr'
  },

  {
    title: 'Industrial Hose Manufacturing VR Training',
    image: asset('/projects/hose-manufacturing.jpg'),

    description:
      'Large-scale VR-based industrial training application covering five specialized Industrial Hose manufacturing modules.',

    overview: [
      'Developed a large-scale VR training application focused on Industrial Hose manufacturing using Unity and C#.',
      'Structured the application into specialized training modules covering different manufacturing processes.',
      'Created interactive virtual manufacturing environments to simulate production procedures and workplace activities.',
      'Designed step-by-step training workflows to guide users through manufacturing processes and operational procedures.',
      'Implemented interactive equipment, tools, machinery, and process-specific objects for hands-on VR training.',
      'Provided a consistent training experience across multiple Industrial Hose manufacturing modules.'
    ],

    feature: [
      'Specialized Industrial Hose manufacturing training modules.',
      'Interactive VR equipment, tools, machinery, and manufacturing components.',
      'Step-by-step workflows for guiding users through manufacturing procedures.',
      'Gameplay systems for interactions, tasks, and training progression.',
      'UI systems for instructions, task information, progress, and user feedback.',
      'Animations and event-driven interactions for manufacturing processes and equipment.',
      'Interactive training scenarios simulating practical manufacturing activities.',
      'Multiple manufacturing workflows within a single VR training application.',
      'Multi-language support for the training experience.'
    ],

    contribution: [
      'Developed VR interaction systems and gameplay logic using Unity and C#.',
      'Integrated multiple Industrial Hose manufacturing scenes into a single training module.',
      'Implemented interactive equipment, tools, machinery, and process-specific objects.',
      'Developed task and workflow logic to control user progression through manufacturing procedures.',
      'Created and integrated UI systems for instructions, progress, and feedback.',
      'Implemented animations and event-based interactions for manufacturing activities.',
      'Developed and integrated virtual manufacturing environments and supporting 3D elements.',
      'Tested and refined VR interactions across different training modules.',
      'Optimized VR interactions and application performance for Meta Quest devices.'
    ],

    categoryTitle: 'Modules',
    categories: [
      'Industrial Hose - Metal-Based Module',
      'Industrial Hose - Rubber-Based Module',
      'Industrial Hose - Nylon-Based Module',
      'Industrial Hose - Beading Module',
      'Industrial Hose - Aerospace Module'
    ],

    technologies: 'UNITY · C# · META SDK INTERACTION TOOLKIT · META QUEST · VR',
    link: '/projects/hose-manufacturing'
  },

  {
    title: 'AI-Powered AR Virtual Try-On',
    image: asset('/projects/ai-virtual-tryon.jpg'),

    description:
      'AI-powered AR experiences developed for interactive PC kiosk applications, featuring outfit, accessory, and hairstyle customization.',

    overview: [
      'Developed multiple AI-powered AR experiences using Unity and C# for interactive kiosk deployment.',
      'Created a tamil movie-themed experience allowing users to customize outfits and styles inspired by movie characters.',
      'Developed a Christmas-themed experience for customizing event accessories.',
      'Developed a hair customization experience allowing users to select and preview different hairstyles through AR.',
      'Enabled users to interactively visualize customized outfits, accessories, and hairstyles.',
      'Combined interactive UI, AR elements, and AI-powered styling functionality into cohesive kiosk experiences.'
    ],

    categoryTitle: 'Applications',
    categories: [
      'Movie Character Style AR (Tamil)',
      'Xmas Event AR',
      'Hair Customization AR'
    ],

    feature: [
      'PC-based AR kiosk experiences.',
      'Tamil Movie character-inspired outfit and style customization.',
      'Interactive Christmas event accessory customization.',
      'Hairstyle selection and AR preview.',
      'AI-powered styling recommendations.',
      'Interactive UI workflows for selecting and customizing virtual items.',
      'Real-time visualization of customized outfits, accessories, and hairstyles.',
      'User-focused interaction flows across different themed AR experiences.'
    ],

    contribution: [
      'Designed and implemented UI and interaction systems for PC-based AR kiosk applications.',
      'Worked on C# scripting for UI interactions and customization functionality.',
      'Created prompts for AI-powered styling recommendations using the Google Gemini API.',
      'Integrated UI workflows with AR customization and AI-powered styling functionality.',
      'Worked on integrating components and interaction flows across different AR experiences.',
      'Tested and refined UI and interaction flows across the AR applications.'
    ],

    technologies: 'UNITY · C# · AR · AI',
    link: '/projects/ai-virtual-tryon'
  },

  {
    title: 'Industrial LOTO & Services VR Training',
    image: asset('/projects/industrial-safety.jpg'),

    description:
      'Interactive VR-based industrial service training application featuring permit-to-work, Lockout/Tagout (LOTO), equipment isolation, maintenance, animation, and power restoration procedures.',

    overview: [
      'Developed an interactive industrial safety training application using Unity and C#.',
      'Implemented training scenes covering electrical power isolation and machine maintenance procedures.',
      'Simulated permit-to-work procedures, Lockout/Tagout (LOTO), equipment checks, maintenance activities, and system restoration.',
      'Designed step-by-step workflows to guide users through industrial safety procedures in the correct sequence.',
      'Integrated animated equipment operations and event-driven training activities.'
    ],

    categoryTitle: 'Modules',
    categories: [
      'Electrical Power Isolation & LOTO Training',
      'Machine & Valve Isolation Maintenance Training'
    ],

    feature: [
      'Permit-to-work request and approval workflow.',
      'Communication-based power shutdown procedure.',
      'Transformer power status verification.',
      'Lockout/Tagout (LOTO) procedures for equipment isolation.',
      'LOTO lock placement on machines and valves.',
      'Interactive equipment, machine, and valve operations.',
      'Step-by-step maintenance and repair procedures.',
      'Power and equipment restoration workflow.',
      'Recording and reviewing required safety information and permit details.',
      'Animated equipment operations and maintenance activities.',
      'Event-driven interactions connecting equipment, gameplay, and training events.',
      'Multi-language support for regional training experience.',
      'Interactive training feedback and progression.'
    ],

    contribution: [
      'Developed VR interaction systems and gameplay logic using Unity and C#.',
      'Worked on Unity scenes covering electrical power isolation and machine maintenance workflows.',
      'Implemented interaction workflows for permit-to-work and LOTO procedures.',
      'Developed gameplay logic for equipment isolation, maintenance, and restoration sequences.',
      'Implemented interactions for industrial equipment, transformers, machines, and valves.',
      'Created UI workflows for permit information, task instructions, and training progression.',
      'Integrated NPC animations and event-driven interactions for equipment operations and training activities.',
      'Worked on multi-language UI and training content integration.',
      'Integrated gameplay events with UI, animations, and training progression.',
      'Tested and refined interaction and training workflows across both Unity scenes.'
    ],

    technologies: 'UNITY · C# · VR · META SDK INTERACTION TOOLKIT · META QUEST',
    link: '/projects/industrial-safety'
  },

  {
    title: 'VR PAINT',
    image: asset('/projects/vr-paint.jpg'),

    description: 'Interactive VR painting experience developed using Unity.',

    overview: [
      'Developed an interactive VR painting experience using Unity and C#.',
      'Created an immersive virtual environment where users can interact with painting tools and surfaces.',
      'Designed the experience around intuitive VR interactions to make painting accessible in a virtual environment.',
      'Integrated interactive objects and painting elements to support the overall gameplay experience.'
    ],

    feature: [
      'Implemented VR-based object interaction and controller input systems.',
      'Developed painting mechanics for interacting with virtual surfaces.',
      'Created interactive painting tools and environment elements.',
      'Implemented gameplay logic to control painting interactions and user actions.',
      'Designed interactive UI elements required for the painting experience.',
      'Integrated animations and visual feedback to improve interaction clarity.',
      'Optimized the experience for smooth interaction on Meta Quest.'
    ],

    contribution: [
      'Developed the core VR interaction systems using Unity and C#.',
      'Implemented painting mechanics and interactive painting elements.',
      'Created environment elements and interactive objects for the virtual experience.',
      'Developed gameplay logic to manage user interactions and painting activities.',
      'Integrated UI and feedback systems for improved usability.',
      'Tested and optimized interactions for Meta Quest VR devices.'
    ],

    technologies: 'UNITY · C# · XR · META QUEST',
    link: '/projects/vr-paint'
  },

  {
    title: 'F1 SHOWROOM',
    image: asset('/projects/f1-showroom.jpg'),

    description: 'Interactive virtual showroom prototype developed using Unity.',

    overview: [
      'Developed an interactive virtual showroom prototype using Unity and C#.',
      'Created a detailed F1-inspired environment for exploring vehicles and showroom elements.',
      'Designed the experience to allow users to explore and interact with different elements within the virtual environment.',
      'Integrated environmental assets, interactive objects, and navigation systems to create an engaging showroom experience.'
    ],

    feature: [
      'Developed interactive showroom elements and 3D object interactions.',
      'Implemented user navigation and interaction systems.',
      'Created gameplay logic for interactive showroom features.',
      'Integrated environmental assets and scene elements.',
      'Implemented UI elements to support navigation and user interaction.',
      'Added animations and interactive events to enhance the showroom experience.',
      'Optimized scene elements and interactions for a smooth real-time experience.'
    ],

    contribution: [
      'Developed the virtual showroom environment using Unity.',
      'Implemented interactive elements and object interactions.',
      'Developed gameplay logic for showroom interactions.',
      'Integrated 3D assets and environmental elements into the scene.',
      'Implemented user navigation and interaction systems.',
      'Created supporting UI and interactive feedback elements.'
    ],

    technologies: 'UNITY · C# · XR',
    link: '/projects/f1-showroom'
  },

  {
    title: 'FACTORY PROTOTYPE',
    image: asset('/projects/factory-prototype.jpg'),

    description: 'Industrial VR experience developed for interactive environments.',

    overview: [
      'Developed an industrial VR prototype using Unity and C#.',
      'Created a virtual factory environment for immersive exploration and interaction.',
      'Designed interactive industrial elements to simulate a realistic workplace environment.',
      'Integrated environmental assets and interactive systems to demonstrate potential industrial VR applications.'
    ],

    feature: [
      'Developed interactive VR object and equipment interactions.',
      'Implemented user navigation and movement systems within the factory environment.',
      'Created gameplay logic for interactive industrial elements.',
      'Integrated 3D environment assets and factory components.',
      'Implemented interaction feedback for user actions.',
      'Created event-driven interactions between objects and gameplay systems.',
      'Optimized the environment and VR interactions for real-time performance.'
    ],

    contribution: [
      'Developed the virtual factory environment using Unity.',
      'Implemented VR interaction systems for industrial objects and equipment.',
      'Developed gameplay logic for interactive factory elements.',
      'Integrated and positioned 3D environment assets.',
      'Implemented user navigation and interaction systems.',
      'Created event-based interactions and supporting gameplay systems.',
      'Optimized the VR environment for a smooth user experience.'
    ],

    technologies: 'UNITY · C# · VR',
    link: '/projects/factory-prototype'
  }
];

export const personalProjects = [
  {
    title: 'FLY AWAY',
    image: asset('/projects/game-project.jpg'),

    description:
      '2D side-scrolling endless runner game developed with Unity and C# featuring responsive controls, dynamic obstacles, and score tracking.',

    overview: [
      'Developed a complete 2D side-scrolling endless runner game using Unity and C#.',
      'Designed responsive player physics and flying movement mechanics with custom input handling.',
      'Created a procedural obstacle generation system with increasing difficulty curves over time.',
      'Implemented full game-loop architecture including start screen, pause state, game over, and restart workflows.',
      'Built animated sprite characters, scrolling parallax background environments, and dynamic particle effects.'
    ],

    feature: [
      'Responsive one-touch flying and glide physics mechanics.',
      'Procedural obstacle generation with randomized patterns and scaling difficulty.',
      'Parallax scrolling background layers providing visual depth.',
      'Persistent high-score tracking and local save data using PlayerPrefs.',
      'Custom particle systems for collisions, speed trails, and collectables.',
      'Comprehensive audio manager for background music and interactive sound effects.',
      'Polished UI for menus, HUD score counter, game over modal, and settings.'
    ],

    contribution: [
      'Designed and programmed core gameplay mechanics, player controller, and physics logic in C#.',
      'Engineered procedural obstacle spawning and object pooling systems for peak mobile/PC performance.',
      'Implemented game state management (Intro, Active, Paused, Game Over) via an event-driven architecture.',
      'Integrated sprite animations, particle effects, and screen-shake feedback on collisions.',
      'Tested, balanced gameplay difficulty pacing, and optimized build performance.'
    ],

    technologies: 'UNITY 2D · C# · GAMEPLAY PROGRAMMING · SPRITE ANIMATION',
    link: '/projects/game-project',
    links: [
      {
        label: 'itch.io',
        url: 'https://sriram-game-dev.itch.io/fly-away',
        type: 'itch'
      },
      {
        label: 'GitHub',
        url: 'https://github.com/sriram-game-dev/Fly-Away',
        type: 'github'
      }
    ]
  },

  {
    title: 'THE BLITZ ARENA',
    image: asset('/projects/blitz-arena.jpg'),

    description:
      'Augmented reality target-practice mini-game for Android built in Unity with AR Foundation, featuring horizontal plane detection, tap-to-place anchoring, custom URP Shader Graph energy targets, and camera cannon mechanics.',

    overview: [
      'Developed an augmented reality target-practice mini-game for Android using Unity and AR Foundation.',
      'Implemented horizontal plane detection and tap-to-place mechanics using ARRaycastManager and ARAnchor.',
      'Designed custom URP Shader Graph shaders featuring scrolling gradient noise, Fresnel rim lighting, and vertex displacement.',
      'Programmed core game loops in C# including camera-cannon shooting, object pooling, target hits, and wave clearing.',
      'Integrated bloom post-processing, particle explosions, muzzle flash, projectile trails, and audio effects.'
    ],

    feature: [
      'Horizontal plane detection and tap-to-place arena spawning via ARRaycastManager.',
      'Surface pose locking with ARAnchor to ensure the game base remains fixed in the physical world.',
      'Custom URP Unlit Shader Graph for energy targets with scrolling noise, HDR Fresnel rim glow, and vertex wobble.',
      'Custom plane grid shader with procedural cyan cell tiling for surface visualization.',
      'Phone camera cannon firing projectiles with continuous collision detection and object pooling.',
      'Particle explosions, muzzle flash, projectile trails, and audio sound effects.',
      'Complete wave game loop with score counter, hit validation, and wave clear restart states.'
    ],

    contribution: [
      'Architected and programmed the complete AR game in Unity using C# and AR Foundation.',
      'Developed plane detection, surface raycasting, and placement anchor systems.',
      'Authored custom Shader Graph materials for energy targets and AR surface grid visualizers.',
      'Built high-performance object pooling for projectile spawning and recycling.',
      'Configured Android URP pipeline, AR Background Renderer Feature, and mobile optimizations.'
    ],

    technologies: 'UNITY · C# · AR FOUNDATION · ARCORE · URP · SHADER GRAPH · ANDROID',
    link: '/projects/the-blitz-arena',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/sriram-game-dev/The-Blitz-Arena.git',
        type: 'github'
      }
    ]
  },

  {
    title: 'AUGMENTED REALITY LAB',
    image: asset('/projects/ar-project.jpg'),

    description:
      'Mobile AR application exploring real-time horizontal/vertical plane detection, surface anchoring, and interactive gesture-based 3D object manipulation.',

    overview: [
      'Developed an augmented reality interactive application exploring real-world environment scanning and object placement.',
      'Implemented plane detection to identify floor, tabletop, and wall surfaces using camera passthrough.',
      'Created touch gesture algorithms for scaling, rotating, and translating virtual 3D models seamlessly in physical space.',
      'Integrated real-time lighting estimation to realistically match virtual asset shadows with physical surroundings.'
    ],

    feature: [
      'Real-time horizontal and vertical plane detection with visual mesh indicators.',
      'One-tap surface anchoring and raycast hit testing for precise object spawning.',
      'Multi-touch gesture controls for 360-degree rotation, pinch-to-scale, and drag relocation.',
      'Environmental lighting estimation and dynamic soft real-time shadows.',
      'Clean mobile UI overlay displaying tracking status, surface guidance, and object selectors.'
    ],

    contribution: [
      'Programmed AR raycasting, plane detection managers, and gesture recognition in Unity C#.',
      'Implemented smooth lerp positioning and rotation constraints to prevent object drifting.',
      'Optimized 3D asset draw calls and materials for smooth mobile AR performance.'
    ],

    technologies: 'UNITY · C# · AR · MOBILE PASSTHROUGH · GESTURE RECOGNITION',
    link: '/projects/ar-project'
  },

  {
    title: 'WEBGL 3D INTERACTIVE',
    image: asset('/projects/webgl-project.jpg'),

    description:
      'High-performance browser-based 3D interactive application optimized with Unity WebGL, lightweight shaders, and responsive canvas scaling.',

    overview: [
      'Developed an interactive 3D WebGL application designed to deliver real-time graphics smoothly in standard web browsers.',
      'Focused heavily on WebGL build optimization, asset compression, and memory footprint minimization.',
      'Engineered responsive canvas resizing and touch/mouse dual input handling across desktop and mobile browsers.',
      'Demonstrated lightweight real-time shaders and low-overhead UI workflows for instant web loading.'
    ],

    feature: [
      'Direct browser execution with zero install requirement via WebGL 2.0 / HTML5 canvas.',
      'Asset bundle streaming and Brotli/Gzip compression for rapid initial load times.',
      'Interactive 3D orbit camera controls with inertia damping and zoom limits.',
      'Dynamic real-time material switches and customizable lighting presets.',
      'Real-time frame-rate (FPS) counter and memory monitoring overlay.'
    ],

    contribution: [
      'Built the entire WebGL application pipeline, C# interaction controllers, and camera orbit logic.',
      'Tuned Unity WebGL build configurations, player settings, and WebAssembly memory heap allocations.',
      'Customized HTML5 template with loading progress bar and responsive fullscreen toggling.',
      'Profiled and achieved stable 60 FPS performance across major web browsers (Chrome, Firefox, Safari, Edge).'
    ],

    technologies: 'UNITY · C# · WEBGL · WASM · HTML5 · REAL-TIME 3D',
    link: '/projects/webgl-project'
  }
];

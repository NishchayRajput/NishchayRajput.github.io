import { SectionHeader } from "@/components/section-header";
import { SkillCard, SoftSkillCard } from "@/components/skill-components";
import { BookOpen, Brain, Code, Database, FileCode, LayoutGrid, Layers } from "lucide-react";
import Image from "next/image";
export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero section with animated background */}
      <div className="relative overflow-hidden py-20 bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/5 via-primary/2 to-transparent"></div>

        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary/5 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-60 h-60 rounded-full bg-primary/5 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            title="My Skills"
            subtitle="Technologies and tools I've mastered throughout my journey"
            className="mb-16"
          />

          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-muted-foreground text-lg">
              As a developer, I&apos;ve cultivated a diverse range of technical and soft skills
              that allow me to tackle complex challenges and deliver creative solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Interactive skill categories */}
        <div className="space-y-24">
          {/* Technical Skills Grid Layout */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Technical Skills</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Left column - Languages */}
              <div className="col-span-1">
                <div className="bg-background/50 rounded-xl p-6 border border-muted shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-5 flex items-center gap-2">
                    <span className="bg-primary/10 p-2 rounded-lg">
                      <Code className="h-4 w-4 text-primary" />
                    </span>
                    Programming Languages
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <SkillCard name="C" icon={
                      <Image src="https://cdn-icons-png.flaticon.com/128/3600/3600912.png" alt="C" width={32} height={32} className="h-8 w-8" />
                    } />
                    <SkillCard name="C++" icon={
                      <Image src="https://cdn-icons-png.flaticon.com/128/6132/6132222.png" alt="C++" width={32} height={32} className="h-8 w-8" />
                    } />
                    <SkillCard name="JavaScript" icon={
                      <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="JavaScript" width={32} height={32} className="h-8 w-8" />
                    } />
                    <SkillCard name="TypeScript" icon={
                      <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968381.png" alt="TypeScript" width={32} height={32} className="h-8 w-8" />
                    } />
                    <SkillCard name="HTML" icon={
                      <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968267.png" alt="HTML" width={32} height={32} className="h-8 w-8" />
                    } />
                    <SkillCard name="CSS" icon={
                      <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png" alt="CSS" width={32} height={32} className="h-8 w-8" />
                    } />
                    <SkillCard name="PHP" icon={
                      <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968332.png" alt="PHP" width={32} height={32} className="h-8 w-8" />
                    } />
                  </div>
                </div>
              </div>

              {/* Middle column - Frontend */}
              <div className="col-span-1">
                <div className="bg-background/50 rounded-xl p-6 border border-muted shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-5 flex items-center gap-2">
                    <span className="bg-primary/10 p-2 rounded-lg">
                      <Layers className="h-4 w-4 text-primary" />
                    </span>
                    Frontend Development
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <SkillCard name="React" icon={
                      <Image src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png" alt="React" width={32} height={32} className="h-8 w-8" />
                    } />
                    <SkillCard name="Next.js" icon={
                      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                          <path d="M11.2141 0.00645944C11.1625 0.0111515 10.9982 0.0275738 10.8504 0.039304C7.44164 0.346635 4.24868 2.18593 2.22639 5.01291C1.10029 6.58476 0.380059 8.36775 0.107918 10.2563C0.0117302 10.9156 0 11.1103 0 12.0041C0 12.898 0.0117302 13.0927 0.107918 13.7519C0.760117 18.2587 3.96716 22.0452 8.31672 23.4481C9.0956 23.6991 9.91672 23.8704 10.8504 23.9736C11.2141 24.0135 12.7859 24.0135 13.1496 23.9736C14.7613 23.7953 16.1267 23.3965 17.4733 22.7091C17.6798 22.6035 17.7196 22.5754 17.6915 22.5519C17.6727 22.5378 16.793 21.3578 15.7372 19.9314L13.8182 17.339L11.4135 13.7801C10.0903 11.8235 9.00176 10.2235 8.99238 10.2235C8.98299 10.2211 8.97361 11.8024 8.96891 13.7331C8.96188 17.1138 8.95953 17.2499 8.9173 17.3296C8.85631 17.4446 8.80938 17.4915 8.71085 17.5431C8.63578 17.5807 8.57009 17.5877 8.21584 17.5877H7.80997L7.70205 17.5197C7.63167 17.4751 7.58006 17.4164 7.54487 17.3484L7.4956 17.2428L7.50029 12.539L7.50733 7.83285L7.58006 7.74136C7.6176 7.69209 7.69736 7.62875 7.75367 7.59825C7.84985 7.55133 7.88739 7.54664 8.29325 7.54664C8.77185 7.54664 8.85161 7.5654 8.97595 7.70147C9.01114 7.73901 10.3132 9.7003 11.871 12.0628C13.4287 14.4252 15.5589 17.651 16.6053 19.2346L18.5056 22.1132L18.6018 22.0499C19.4534 21.4962 20.3543 20.7079 21.0674 19.8868C22.5853 18.1437 23.5636 16.0182 23.8921 13.7519C23.9883 13.0927 24 12.898 24 12.0041C24 11.1103 23.9883 10.9156 23.8921 10.2563C23.2399 5.74957 20.0328 1.96306 15.6833 0.560125C14.9161 0.311445 14.0997 0.140184 13.1848 0.036958C12.9595 0.0134976 11.4088 -0.0123089 11.2141 0.00645944ZM16.1267 7.26511C16.2393 7.32142 16.3308 7.42933 16.3636 7.54194C16.3824 7.60294 16.3871 8.90734 16.3824 11.8469L16.3754 16.0651L15.6317 14.9249L14.8856 13.7848V10.7185C14.8856 8.73608 14.895 7.62171 14.9091 7.56775C14.9466 7.43637 15.0287 7.33315 15.1413 7.27215C15.2375 7.22288 15.2727 7.21819 15.6411 7.21819C15.9883 7.21819 16.0493 7.22288 16.1267 7.26511Z" />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    } />
                    <SkillCard name="Tailwind CSS" icon={
                      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                      </svg>
                    } />
                    <SkillCard name="Flutter" icon={
                      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
                      </svg>
                    } />
                  </div>
                </div>
              </div>

              {/* Right column - Backend */}
              <div className="col-span-1">
                <div className="bg-background/50 rounded-xl p-6 border border-muted shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-5 flex items-center gap-2">
                    <span className="bg-primary/10 p-2 rounded-lg">
                      <FileCode className="h-4 w-4 text-primary" />
                    </span>
                    Backend Development
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <SkillCard name="Node.js" icon={
                      <Image src="https://cdn-icons-png.flaticon.com/128/919/919825.png" alt="Node.js" width={32} height={32} className="h-8 w-8" />
                    } />
                    <SkillCard name="Express.js" icon={
                      <svg className="h-8 w-8" viewBox="0 0 512 149" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33224862,115.629027 L3.33224862,58.6475756 L74.4757566,58.6475756 L74.4757566,55.315327 L3.33224862,55.315327 L3.33224862,3.33224862 L78.9742922,3.33224862 L78.9742922,0 L-3.55271368e-15,0 L-3.55271368e-15,118.961276 L79.640742,118.961276 L79.640742,115.629027 L3.33224862,115.629027 L3.33224862,115.629027 Z M143.786528,33.3224862 L114.296128,72.1431826 L85.472177,33.3224862 L81.1402538,33.3224862 L112.296778,74.642369 L78.14123,118.961276 L82.1399284,118.961276 L114.296128,77.1415554 L146.618939,118.961276 L150.78425,118.961276 L116.462089,74.642369 L147.785226,33.3224862 L143.786528,33.3224862 Z" />
                        <path d="M160.780996,148.285063 L160.780996,94.9690856 L161.114221,94.9690856 C163.11358,102.744371 167.056701,108.992275 172.943703,113.712984 C178.830705,118.433693 186.32819,120.794012 195.436381,120.794012 C201.323384,120.794012 206.543854,119.599969 211.09795,117.211845 C215.652046,114.823722 219.456324,111.574812 222.510902,107.465018 C225.565478,103.355224 227.898028,98.5790488 229.508624,93.1363488 C231.119218,87.6936488 231.924504,81.973346 231.924504,75.9752684 C231.924504,69.532889 231.09145,63.5904384 229.425318,58.1477384 C227.759184,52.7050384 225.343328,47.9844 222.177676,43.9856818 C219.012024,39.9869634 215.179976,36.8768958 210.681418,34.6553856 C206.18286,32.4338754 201.101232,31.323137 195.436381,31.323137 C191.104437,31.323137 187.07801,31.9618116 183.35698,33.23918 C179.635951,34.5165484 176.331504,36.3214982 173.443541,38.654084 C170.555577,40.9866696 168.056416,43.7357472 165.945981,46.9013992 C163.835546,50.0670512 162.224976,53.5381088 161.114221,57.3146762 L160.780996,57.3146762 L160.780996,33.3224862 L157.448747,33.3224862 L157.448747,148.285063 L160.780996,148.285063 Z" />
                        <path d="M250.251872,118.961276 L250.251872,70.4770582 C250.251872,65.8118868 250.918314,61.2578592 252.25122,56.814839 C253.584126,52.3718186 255.638992,48.4564656 258.41588,45.0686626 C261.192768,41.6808596 264.719362,39.0150872 268.99577,37.0712658 C273.272176,35.1274444 278.353806,34.322159 284.240808,34.6553856 L284.240808,31.323137 C279.131334,31.2120614 274.660612,31.7674308 270.828506,32.9892614 C266.996402,34.211092 263.691954,35.8771996 260.915066,37.9876342 C258.138178,40.098069 255.916702,42.569462 254.25057,45.4018874 C252.584436,48.2343128 251.362624,51.2610752 250.585096,54.4822648 L250.251872,54.4822648 L250.251872,33.3224862 L246.919622,33.3224862 L246.919622,118.961276 L250.251872,118.961276 Z" />
                        <path d="M288.406118,76.8083306 L360.049464,76.8083306 C360.271614,70.9213286 359.688476,65.2565626 358.300032,59.8138626 C356.911588,54.3711628 354.690112,49.5394506 351.635536,45.3185812 C348.580958,41.0977118 344.637838,37.7099596 339.806052,35.155223 C334.974268,32.6004862 329.226196,31.323137 322.561666,31.323137 C317.78542,31.323137 313.120318,32.3228016 308.566222,34.3221608 C304.012126,36.32152 300.013468,39.2372084 296.570126,43.0693134 C293.126786,46.9014184 290.34994,51.5942884 288.239506,57.1480638 C286.12907,62.7018392 285.07387,69.0330484 285.07387,76.1418808 C285.07387,82.473185 285.79585,88.387867 287.23983,93.8861048 C288.683812,99.3843424 290.90529,104.160518 293.904328,108.214774 C296.903366,112.26903 300.763182,115.406866 305.483892,117.628376 C310.204602,119.849886 315.897136,120.905088 322.561666,120.794012 C332.33631,120.794012 340.555776,118.044935 347.220306,112.546697 C353.884836,107.048459 357.827958,99.3010588 359.049788,89.304263 L355.71754,89.304263 C354.273558,98.7456812 350.580352,105.826639 344.637814,110.547348 C338.695274,115.268057 331.225558,117.628376 322.228442,117.628376 C316.119288,117.628376 310.954354,116.573175 306.733486,114.46274 C302.512616,112.352305 299.069326,109.464385 296.403514,105.798894 C293.737702,102.133402 291.766142,97.8292904 290.488774,92.8864302 C289.211404,87.94357 288.517194,82.5842572 288.406118,76.8083306 Z" />
                        <path d="M429.193622,58.6475756 L432.52587,58.6475756 C432.52587,49.0950818 429.749024,42.1529666 424.195248,37.8210218 C418.641474,33.489077 411.088452,31.323137 401.535958,31.323137 C396.204334,31.323137 391.705844,31.98958 388.040352,33.3224862 C384.37486,34.6553922 381.375866,36.3770368 379.04328,38.4874716 C376.710694,40.5979062 375.044586,42.930457 374.044908,45.4851936 C373.045228,48.0399304 372.545396,50.4835548 372.545396,52.8161406 C372.545396,57.481312 373.37845,61.2022858 375.044582,63.9791734 C376.710714,66.7560612 379.32095,68.9220012 382.875366,70.4770582 C385.319028,71.5878134 388.095874,72.587478 391.205988,73.476082 C394.316102,74.364686 397.926002,75.3088138 402.035796,76.3084934 C405.701288,77.1970974 409.311188,78.0856882 412.865604,78.9742922 C416.42002,79.8628962 419.557856,81.0569402 422.279206,82.5564594 C425.000556,84.0559788 427.222032,85.9720026 428.943704,88.3045884 C430.665374,90.637174 431.526196,93.6917048 431.526196,97.468272 C431.526196,101.133764 430.665374,104.243831 428.943704,106.798568 C427.222032,109.353305 425.028324,111.435939 422.362512,113.046534 C419.6967,114.657129 416.725474,115.823405 413.448748,116.545395 C410.17202,117.267386 406.978646,117.628376 403.868532,117.628376 C393.760662,117.628376 386.01326,115.379131 380.626098,110.880573 C375.238936,106.382015 372.545396,99.3010572 372.545396,89.6374878 L369.213146,89.6374878 C369.213146,100.411812 372.128836,108.298055 377.9603,113.296453 C383.791764,118.294851 392.427754,120.794012 403.868532,120.794012 C407.534024,120.794012 411.22723,120.377485 414.94826,119.544419 C418.669288,118.711353 422.001504,117.350698 424.945004,115.462415 C427.888506,113.574131 430.276594,111.130506 432.10934,108.131468 C433.942086,105.132429 434.858444,101.466992 434.858444,97.1350472 C434.858444,93.0252534 434.05316,89.693038 432.442564,87.1383014 C430.83197,84.5835646 428.721566,82.4731616 426.111292,80.807029 C423.501018,79.1408964 420.55756,77.8357786 417.280834,76.8916368 C414.004106,75.947495 410.699658,75.0311358 407.367394,74.1425318 C402.702222,72.9207012 398.620258,71.8654996 395.12138,70.9768956 C391.622502,70.0882914 388.373592,69.03309 385.374552,67.8112594 C382.48659,66.5894288 380.181808,64.8400158 378.460136,62.5629678 C376.738466,60.2859198 375.877644,57.03701 375.877644,52.8161406 C375.877644,52.038612 376.099792,50.650189 376.544094,48.6508298 C376.988396,46.6514706 378.043598,44.624373 379.70973,42.569476 C381.375862,40.5145792 383.93056,38.6818608 387.373902,37.0712658 C390.817242,35.460671 395.53788,34.6553856 401.535958,34.6553856 C405.645752,34.6553856 409.394494,35.099681 412.782298,35.988285 C416.1701,36.8768892 419.085788,38.2930806 421.52945,40.236902 C423.973112,42.1807234 425.861366,44.6521164 427.194272,47.6511552 C428.527178,50.650194 429.193622,54.3156308 429.193622,58.6475756 Z" />
                      </svg>
                    } />
                    <SkillCard name="Firebase" icon={
                      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z" />
                      </svg>
                    } />
                    <SkillCard name="Supabase" icon={
                      <Image src="https://cdn-icons-png.flaticon.com/128/6911/6911219.png" alt="Supabase" width={32} height={32} className="h-8 w-8" />
                    } />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Technical Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left column - Database & Cloud */}
            <div>
              <div className="bg-background/50 rounded-xl p-6 border border-muted shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-5 flex items-center gap-2">
                  <span className="bg-primary/10 p-2 rounded-lg">
                    <Database className="h-4 w-4 text-primary" />
                  </span>
                  Database & Cloud Technologies
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <SkillCard name="MongoDB" icon={
                    <Image src="https://cdn-icons-png.flaticon.com/128/2906/2906274.png" alt="MongoDB" width={32} height={32} className="h-8 w-8" />
                  } />
                  <SkillCard name="MySQL" icon={
                    <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968313.png" alt="MySQL" width={32} height={32} className="h-8 w-8" />
                  } />
                  <SkillCard name="Supabase" icon={
                    <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968389.png" alt="Supabase" width={32} height={32} className="h-8 w-8" />
                  } />
                </div>
              </div>
            </div>

            {/* Right column - Additional Tools */}
            <div>
              <div className="bg-background/50 rounded-xl p-6 border border-muted shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-5 flex items-center gap-2">
                  <span className="bg-primary/10 p-2 rounded-lg">
                    <Brain className="h-4 w-4 text-primary" />
                  </span>
                  Additional Tools
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SkillCard name="LaTeX" icon={
                    <svg className="h-8 w-8" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.525 31.482h-.482c-.192 1.966-.462 4.357-3.855 4.357h-1.562c-.905 0-.944-.136-.944-.772V24.831c0-.655 0-.925 1.812-.925h.636v-.578c-.694.058-2.429.058-3.22.058-.751 0-2.255 0-2.91-.058v.578h.443c1.485 0 1.523.212 1.523.906v10.12c0 .694-.038.907-1.523.907H8v.597h10.005l.52-4.954z" />
                      <path d="M18.198 23.308c-.078-.23-.116-.308-.367-.308-.25 0-.308.077-.385.308l-3.104 7.866c-.135.327-.366.925-1.561.925v.482h2.988v-.482c-.598 0-.964-.27-.964-.656 0-.096.02-.135.058-.27l.655-1.657h3.817l.771 1.966a.65.65 0 0 1 .077.231c0 .386-.732.386-1.099.386v.482h3.798v-.482h-.27c-.906 0-1.002-.135-1.137-.52l-3.277-8.27zm-.771 1.37 1.715 4.356h-3.431l1.716-4.357z" />
                      <path d="M33.639 23.443h-11.74l-.347 4.318h.463c.27-3.103.558-3.74 3.47-3.74.346 0 .848 0 1.04.04.405.076.405.288.405.732v10.12c0 .656 0 .926-2.024.926h-.771v.597c.79-.058 2.737-.058 3.624-.058s2.872 0 3.663.058v-.597h-.771c-2.024 0-2.024-.27-2.024-.926v-10.12c0-.386 0-.656.347-.733.212-.038.732-.038 1.098-.038 2.892 0 3.181.636 3.45 3.74h.483l-.366-4.319z" />
                      <path d="M43.971 35.82h-.482c-.482 2.949-.925 4.356-4.221 4.356h-2.545c-.906 0-.945-.135-.945-.771v-5.128h1.716c1.87 0 2.082.617 2.082 2.255h.482v-5.089h-.482c0 1.639-.212 2.236-2.082 2.236h-1.716v-4.607c0-.636.039-.77.945-.77h2.467c2.95 0 3.451 1.06 3.76 3.739h.481l-.54-4.318H32.097v.578h.444c1.484 0 1.523.212 1.523.906V39.27c0 .694-.039.906-1.523.906h-.444v.597h11.065l.81-4.954z" />
                      <path d="m49.773 29.014 2.641-3.855c.405-.617 1.06-1.234 2.776-1.253v-.578h-4.588v.578c.772.02 1.196.443 1.196.887 0 .192-.039.231-.174.443l-2.198 3.239-2.467-3.702c-.039-.057-.135-.212-.135-.289 0-.231.424-.559 1.234-.578v-.578c-.656.058-2.063.058-2.795.058-.598 0-1.793-.02-2.506-.058v.578h.366c1.06 0 1.426.135 1.793.675l3.527 5.34-3.142 4.645c-.27.386-.848 1.273-2.776 1.273v.597h4.588v-.597c-.886-.02-1.214-.54-1.214-.887 0-.174.058-.25.193-.463l2.718-4.029 3.045 4.588c.039.077.097.154.097.212 0 .232-.424.56-1.253.579v.597c.675-.058 2.082-.058 2.795-.058.81 0 1.696.02 2.506.058v-.597h-.366c-1.003 0-1.407-.097-1.812-.694l-4.049-6.13z" />
                    </svg>
                  } />
                  <SkillCard name="Markdown" icon={
                    <svg className="h-8 w-8" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.25,3H1.75A.74027.74027,0,0,0,1,3.73016v8.53968A.74029.74029,0,0,0,1.75,13h12.5a.74029.74029,0,0,0,.75-.73016V3.73016A.74027.74027,0,0,0,14.25,3ZM7.965,10.059H6.97374V7.77311L5.9825,9.34956,4.99125,7.77311V10.059H4V5.934h.91L5.9825,7.51038,7.055,5.934h.91Zm2.45884.0071L8.84766,7.94479H9.94749V5.934h.99124V7.94479H12Z" />
                    </svg>
                  } />

                </div>
              </div>
            </div>
          </div>

          {/* DevOps & Tools */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <LayoutGrid className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">DevOps & Development Tools</h2>
            </div>

            <div className="bg-background/50 rounded-xl p-6 border border-muted shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <SkillCard name="Git" icon={
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
                  </svg>
                } />
                <SkillCard name="GitHub" icon={
                  <Image src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="GitHub" width={32} height={32} className="h-8 w-8" />
                } />
                <SkillCard name="Docker" icon={
                  <Image src="https://cdn-icons-png.flaticon.com/128/919/919853.png" alt="Docker" width={32} height={32} className="h-8 w-8" />
                } />
                <SkillCard name="Terraform" icon={
                  <svg className="h-8 w-8" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <g fillRule="evenodd" clipRule="evenodd">
                      <path d="M5.825 2.82l4.35 2.524v5.052L5.825 7.87V2.82zM10.651 5.344v5.052L15 7.87V2.82l-4.349 2.524zM1 0v5.05l4.349 2.527V2.526L1 0zM5.825 13.474L10.174 16v-5.051L5.825 8.423v5.051z" />
                    </g>
                  </svg>
                } />
                <SkillCard name="Jenkins" icon={
                  <Image src="https://cdn-icons-png.flaticon.com/128/5136/5136897.png" alt="Jenkins" width={32} height={32} className="h-8 w-8" />
                } />
                <SkillCard name="Bash" icon={
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.038 4.9l-7.577-4.498C13.009 0.134 12.505 0 12 0c-.505 0-1.009.134-1.462.403L2.961 4.9C2.057 5.437 1.5 6.429 1.5 7.503v8.995c0 1.073.557 2.066 1.462 2.603l7.577 4.497C10.991 23.866 11.495 24 12 24c.505 0 1.009-.134 1.461-.402l7.577-4.497c.906-.537 1.462-1.529 1.462-2.603V7.503c0-1.074-.557-2.066-1.462-2.603zm-9.038 13.1v-.823c0-.301-.146-.579-.395-.752-.389-.275-1.093-.585-1.589-.294-.155.097-.242.262-.242.436v.823c0 .301.147.579.396.752.389.275 1.093.585 1.589.294.154-.097.241-.262.241-.436zm6.342-5.801l-7.384 4.391c-.292.174-.752.308-1.131.308-.351 0-.718-.094-1.077-.308-.498-.302-.889-.749-.889-1.292v-.774c0-.292.114-.594.345-.81.301-.243.705-.304 1.031-.83.326.049.72.455.868.752.023.302.143.601.445.752.376.208.743.117 1.136-.16l7.384-4.391c.292-.174.583-.304.887-.304.351 0 .718.094 1.077.308.498.301.889.748.889 1.292v.774c0 .292-.114.583-.345.81-.3.243-.704.292-1.031.83-.326-.049-.72-.467-.868-.753-.023-.301-.143-.601-.445-.752-.376-.196-.743-.105-1.136.172z" />
                  </svg>
                } />
                <SkillCard name="GNU Debugger" icon={
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.732 4.733h1.492l.42 2.942h-.042l-1.388-1.388-.482.482 1.388 1.388h-.042l-2.942-.42v-1.492l1.798-.21-.21-1.092-.21.21-.21-.21.576-.21zm-2.1 2.31l-.482-.482.482-.482.482.482-.482.482zm1.618.902L9.912 6.85h1.764l.05 1.166-1.05-.072zm-.447 1.179l-1.43 2.31-1.324-.819 1.491-2.31 1.262.819zm-2.068 2.73l.504-.67h3.528l1.032 1.033-1.032 1.032H8.194l.577-1.394zm5.797 5.04c-2.1 0-3.78-1.68-3.78-3.78 0-.882.3-1.68.819-2.31l.839.483c-.42.546-.63 1.155-.63 1.806 0 1.596 1.302 2.94 2.94 2.94 1.638 0 2.94-1.344 2.94-2.94s-1.302-2.94-2.94-2.94c-.525 0-1.05.126-1.491.378l-.399-.819c.546-.294 1.155-.462 1.89-.462 2.1 0 3.78 1.68 3.78 3.78s-1.68 3.864-3.969 3.864zm-.084-2.52a1.323 1.323 0 01-1.324-1.323c0-.735.588-1.323 1.324-1.323.735 0 1.323.588 1.323 1.323 0 .756-.588 1.323-1.323 1.323z" />
                  </svg>
                } />
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Professional Skills</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <SoftSkillCard
                title="Team Collaboration"
                description="Experienced in working with diverse teams, collaborating effectively to deliver projects on time."
              />
              <SoftSkillCard
                title="Problem Solving"
                description="Strong analytical skills with a methodical approach to troubleshooting and problem resolution."
              />
              <SoftSkillCard
                title="Communication"
                description="Able to clearly communicate technical concepts to both technical and non-technical audiences."
              />
              <SoftSkillCard
                title="Time Management"
                description="Efficient in managing multiple tasks and projects while meeting deadlines."
              />
              <SoftSkillCard
                title="Adaptability"
                description="Quick to learn new technologies and adapt to changing project requirements."
              />
              <SoftSkillCard
                title="Leadership"
                description="Experience leading project teams and mentoring junior developers."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

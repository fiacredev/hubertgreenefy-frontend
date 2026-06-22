import React from 'react'

function About() {
  return (
    <div>
    <section className="bg-white pt-9 scroll-mt-17" id="about">

      {/* Hero Banner */}

<div className="relative h-[280px] md:h-[350px] overflow-hidden">
  {/* Background Images */}
  <div className="absolute inset-0 flex">
    <img
      src="/clean.jpeg"
      alt="Service"
      className="w-1/2 h-full object-cover"
    />
    <img
      src="/snow.jpg"
      alt="Service"
      className="w-1/2 h-full object-cover"
    />
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-blue-800/70" />

  {/* Hero Banner Content */}
  <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
    <span className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-green-100">
      About HubertGreenefy Inc.
    </span>

    <h2 className="mb-4 text-4xl font-bold md:text-5xl">
      Cleaning & Snow Services Done Right
    </h2>

    <p className="max-w-2xl text-green-50">
      Professional cleaning and year-round snow clearing solutions for
      residential, commercial, and institutional properties.
    </p>
  </div>
</div>


      {/* Content */}
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-600">
              Trusted Property Care
            </p>

            <h3 className="mb-6 text-4xl font-bold text-gray-900">
               Keeping Properties Clean, Safe & Welcoming
            </h3>

            <p className="mb-4 text-gray-600">
              Hubert Greenefy Inc. provides commercial and residential cleaning services
              and year-round snow removal tailored to each property, serving hospitals,
              offices, retail spaces, and rental properties with consistent, detail-focused care.
            </p>

            <p className="mb-6 text-gray-600">
              We follow a green cleaning approach, using the right methods and products for each
              facility to protect people, surfaces, and the environment, whether for routine
              maintenance, deep cleaning, or seasonal snow clearing.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl bg-green-50 p-5">
                <h4 className="text-3xl font-bold text-green-600">5+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>

              <div className="rounded-xl bg-green-50 p-5">
                <h4 className="text-3xl font-bold text-green-600">100+</h4>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
            </div>
          </div>

          {/* Right Profile */}
          <div className="flex justify-center">
            <div className="text-center">
              <div className="mx-auto mb-6 h-64 w-64 overflow-hidden rounded-full border-8 border-green-100 shadow-xl">
                <img
                  src="ish.jpg"
                  alt="Company Founder"
                  className="h-full w-full object-cover"
                />
              </div>

              <h4 className="text-2xl font-bold text-gray-900">
                Hubert Fiacre
              </h4>

              <p className="mb-4 font-medium text-green-600">
                Founder & Operations Manager
              </p>

              <p className="max-w-md text-gray-600">
                "Our mission is simple: provide dependable cleaning services
                that exceed expectations and give our customers complete peace
                of mind."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About
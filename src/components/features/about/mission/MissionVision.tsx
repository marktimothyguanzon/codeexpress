<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: .7 }}
  className="mx-auto max-w-4xl text-center"
>
  <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
    Our Purpose
  </p>

  <h2 className="mt-4 text-5xl font-black text-slate-900">
    Building Technology.
    <span className="block text-green-500">
      Empowering People.
    </span>

    <span className="block text-blue-600">
      Transforming Communities.
    </span>
  </h2>

  <p className="mt-8 text-xl leading-8 text-slate-600">
    Our mission and vision guide every software solution
    we build, every partnership we establish, and every
    community we serve. They define who we are today and
    inspire where we are going tomorrow.
  </p>

</motion.div>
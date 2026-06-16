return (
  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    {/* Fieldset samler relaterte bokser */}
    <fieldset className="border-0 p-0 m-0">
      {/* Legend fungerer som merkelappen for hele gruppen */}
      <legend className="font-bold mb-2">Hvilke språk foretrekker du?</legend>
      
      {options.map((lang) => (
        <div key={lang} className="flex items-center gap-2 mb-1">
          <input
            type="checkbox"
            id={lang}
            value={lang}
            {...register("preferredLanguages")}
          />
          {/* Hver boks har sin egen label koblet med id */}
          <label htmlFor={lang}>{lang}</label>
        </div>
      ))}
    </fieldset>

    {errors.preferredLanguages && (
      <p className="text-red-500">{errors.preferredLanguages.message}</p>
    )}

    <button type="submit" className="bg-blue-500 text-white p-2 rounded">
      Lagre valg
    </button>
  </form>
);

'use strict';
if (this.QUnitPractice === undefined) this.QUnitPractice = {};

(function(context) {


  var authors = [
    { name: 'Andrew Murray', language: 'English', publishedWorks: 240 },
    { name: 'Muhammad Muhiyyudin Ibn ul Arabi', language: 'Arabic', publishedWorks: 240 },
    { name: 'Jallaludin Suyuti', language: 'Arabic', publishedWorks: 700 },
    { name: 'Abu Hamid Al Ghazali', language: 'Arabic', publishedWorks: 200 },
    { name: 'Isaac Asimov', language: 'English', publishedWorks: 506 },
    { name: 'Jacob M. Appel', language: 'English', publishedWorks: 200 },
    { name: 'Meish Goldish', language: 'English', publishedWorks: 300 },
    { name: 'Kyokutei Bakin', language: 'Japanese', publishedWorks: 470 },
    { name: 'Ursula Bloom', language: 'English', publishedWorks: 500 },
    { name: 'Enid Blyton', language: 'English', publishedWorks: 600 },
    { name: 'Barbara Cartland', language: 'English', publishedWorks: 722 },
    { name: 'Darya Dontsova', language: 'Russian', publishedWorks: 140 },
    { name: 'Alexandre Dumas', language: 'French', publishedWorks: 277 },
    { name: 'Jacob Neusner', language: 'English', publishedWorks: 950 },
    { name: 'Georges Simenon', language: 'French', publishedWorks: 500 }
  ];

  function filterByLanguage(language) {
    var filteredAuthors = [];

    for (var author of authors) {
      if (author.language === language) {
        filteredAuthors.push(author);
      }
    }

    return filteredAuthors;
  }

  function arabicAuthorsCount() {
    var filteredAuthors = filterByLanguage('Arabic');
    return filteredAuthors.length;
  }

  function englishAuthorsCount() {
    var filteredAuthors = filterByLanguage('English');

    return filteredAuthors.length;
  }

  function totalPublishedWorks(arr) {
    var total = 0;
    for (var author of arr) {
      total += author.publishedWorks;
    }
    return total;
  }

  function averageForLanguage(lang) {
    var filteredAuthors = filterByLanguage(lang);
    var publishedWorkCount = totalPublishedWorks(filteredAuthors);

    return publishedWorkCount / filteredAuthors.length;
  }

  function averageOfEnglishAuthors() {
    return averageForLanguage('English');
  }

  function averageOfJapaneseAuthors() {
    return averageForLanguage('Japanese');
  }

  function averageOfAllAuthors() {
    return totalPublishedWorks(authors) / authors.length;
  }

  context.arabicAuthorsCount = arabicAuthorsCount;
  context.englishAuthorsCount = englishAuthorsCount;
  context.averageOfEnglishAuthors = averageOfEnglishAuthors;
  context.averageOfJapaneseAuthors = averageOfJapaneseAuthors;
  context.averageOfAllAuthors = averageOfAllAuthors;

})(window.QUnitPractice);

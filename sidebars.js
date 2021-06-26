module.exports = {
  start: {
    Setup: ['setup/v2','setup/v3'],
    Quickstart: ['quickstart/kotlin','quickstart/android','quickstart/android-viewmodel','quickstart/android-java','quickstart/ktor','quickstart/junit-test']
  },
  docs: {
    Setup: ['setup/v2','setup/v3'],
    'Core' : ['reference/introduction','reference/koin-core/dsl','reference/koin-core/dsl-update','reference/koin-core/definitions','reference/koin-core/modules',
    'reference/koin-core/start-koin','reference/koin-core/koin-component','reference/koin-core/injection-parameters','reference/koin-core/context-isolation',
    'reference/koin-core/scopes','reference/koin-core/setters','reference/koin-core/logging' ,'reference/koin-core/properties'
    ],

    'Tests' : ['reference/koin-test/testing','reference/koin-test/checkmodules'],

    'Android' : ['reference/koin-android/start','reference/koin-android/dsl','reference/koin-android/get-instances','reference/koin-android/scope',
    'reference/koin-android/viewmodel','reference/koin-android/fragment-factory','reference/koin-android/workmanager','reference/koin-android/compose'
    ,'reference/koin-android/dsl-update'
    ],

    'Ktor' : ['reference/koin-ktor/ktor'],
    'Kotlin Multiplatform' : ['reference/koin-mp/intro'],
  },
  migration: {
    Setup: ['setup/v2','setup/v3'],
    'Migration Guides': ['migration/intro'],
  },
  resources: {
    Resources: ['resources/index','resources/articles','resources/videos'],
  }
};

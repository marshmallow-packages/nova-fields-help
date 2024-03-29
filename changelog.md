# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.5.0] - 2022-02-14

### Added
- Added collapsible help fields (See Issue #16 - @atmediauk)

### Changed
- Add Laravel 9.0 support (See PR #18 - @spaantje)

## [0.4.0] - 2020-09-25

### Changed
- Add Laravel 8.0 support (See PR #14 - @JeffBeltran)

## [0.3.0] - 2020-06-01

### Added
- Added new Success template type (thx to [@harlekoy](https://github.com/harlekoy))
- Added missing PHPDoc to PHP field type (thx to [@harlekoy](https://github.com/harlekoy))

### Changed
- Changed template types css color classes to be more easy on the eyes and match Laravel Nova [Badge Field](https://nova.laravel.com/docs/3.0/resources/fields.html#badge-field) (thx to [@harlekoy](https://github.com/harlekoy))
- Changed templates css classes to be defined in PHP field type instead of inside the Vue component (thx to [@harlekoy](https://github.com/harlekoy))

## [0.2.0] - 2020-03-04

### Changed
- Add Laravel 7.0 support (See PR #8 - @weeg)
- Updated laravel mix version to ^4.0

### Fixed
- Fix issue with FormField border-radius not being applied for first/last child
- Fixed multiple incongruences with latest version of Nova
- Fixed #4 - Display as html only works on message but not title

## [0.1.0] - 2019-09-12

### Changed
- Add Laravel 6.0 compatibility (See PR #6 - @mikebronner)

## [0.0.6] - 2018-10-26

### Fixed
- Fix long text overflow in the balloon on index view (@bomshteyn)

## [0.0.5] - 2018-10-17

### Fixed
- Fix #2 - Fix is_callable call on string

## [0.0.4] - 2018-10-10

### Changed
- Improve docs
- Fix #1 - On index view show the icon only when message is present
- Fix #1 - On index align field center

## [0.0.3] - 2018-10-09

### Changed
- Fix install command in readme.md

## [0.0.2] - 2018-10-09

### Changed
- Fix package name in composer.json

## 0.0.1 - 2018-10-09

### Added
- First commit
- Add the changelog

[Unreleased]: https://github.com/comodolab/nova-help/compare/0.4.0...HEAD
[0.4.0]: https://github.com/comodolab/nova-help/compare/0.3.0...0.4.0
[0.3.0]: https://github.com/comodolab/nova-help/compare/0.2.0...0.3.0
[0.2.0]: https://github.com/comodolab/nova-help/compare/0.1.0...0.2.0
[0.1.0]: https://github.com/comodolab/nova-help/compare/0.0.6...0.1.0
[0.0.6]: https://github.com/comodolab/nova-help/compare/0.0.5...0.0.6
[0.0.5]: https://github.com/comodolab/nova-help/compare/0.0.4...0.0.5
[0.0.4]: https://github.com/comodolab/nova-help/compare/0.0.3...0.0.4
[0.0.3]: https://github.com/comodolab/nova-help/compare/0.0.2...0.0.3
[0.0.2]: https://github.com/comodolab/nova-help/compare/0.0.1...0.0.2

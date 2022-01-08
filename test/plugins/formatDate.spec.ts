import { formatDate } from '~/plugins/formatDate'

describe('an ISO formatted datetime', () => {
  it('should be formatted in en-us', () => {
    expect(formatDate('2020-01-20T00:00:00.000Z')).toBe('Jan 20, 2020')
  })
})

describe('an ISO formatted date', () => {
  it('should be formatted in en-us', () => {
    expect(formatDate('2020-01-20')).toBe('Jan 20, 2020')
  })
})

describe('an ISO formatted time', () => {
  it('returns a string indicating the input is not a valid date', () => {
    expect(formatDate('00:00:00.000Z')).toBe('Invalid Date')
  })
})

describe('an empty string', () => {
  it('should return an empty string', function () {
    expect(formatDate('')).toBe('')
  })
})

describe('a string that is not an ISO date', () => {
  it('returns a string indicating the input is not a valid date', function () {
    expect(formatDate('bla bla')).toBe('Invalid Date')
  })
})

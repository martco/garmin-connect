#= require seconds
describe "Seconds", ->
  it "can translate seconds to a minutes object", ->
    seconds = new Seconds(191)
    expect(seconds.toMinutes()).toEqual
      minute: 3
      seconds: 11
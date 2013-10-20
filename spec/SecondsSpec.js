describe("Seconds", function(){
  it("can translate seconds to a minutes object", function(){
    var seconds = new Seconds(191);
    expect(seconds.toMinutes()).toEqual({ minute: 3, seconds: 11 });
  });
});
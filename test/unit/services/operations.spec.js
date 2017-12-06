(function() {
    'use strict';

    describe('operations', function() {
        describe('the add method', function() {
          var operations, events, output;

          // arrange
          beforeEach(module('numbers'));

          beforeEach(inject(function(_operations_, _events_){
              operations = _operations_;
              events = _events_;
          }));
          beforeEach(function () {
              this.numberInput1 = 1;
              this.numberInput2 = 2;
              this.stringInput1 = '1';
              this.stringInput2 = 'oops';
          });

          xit('should accept one or more numberical arguments and return the sum of them', function () {
             // act
             output = operations.add(this.numberInput1, this.numberInput2);
             // assert
             expect(output).toEqual(3);
             expect(output).not.toEqual(4);
          });
          xit('should ignore the argument if it is not a parseable string', function() {
              //act
              output = operations.add(this.numberInput1, this.stringInput2);
              //assert
              expect(output).toEqual(1);
          });
          xit('should ignore if it is not a parseable string', function() {
              //act
              output = operations.add(this.numberInput1, this.stringInput2);
              //assert
              expect(output).toEqual(1);
          });
          it('should publish an added event showing the operands passed to the method and the result', function() {
              // spyOn(events, 'publish');
              // spyOn(events, 'publish').and.callThrough();
              // var retu = spyOn(events, 'publish').and.returnValue(false);
              // console.info(retu());

              // spyOn(events, 'publish').and.callFake(function(eventName, value){
              //     console.info("FAKE");
              //     console.log(eventName);
              //     console.info(value);
              // });

              // spyOn(events, 'publish').and.throwError('oops');
              // expect(function() {
              //     operations.add(1, 1);
              // }).toThrowError('oops')

              spyOn(events, 'publish').and.throwError('oops');
              // events.publish.and.stub();resets the spyOn
              expect(function() {
                  operations.add(1, 1);

              }).toThrowError('oops')

              // operations.add(this.numberInput1, this.numberInput2);
              //
              // expect(events.publish).toHaveBeenCalled();
              // expect(events.publish).toHaveBeenCalledWith('added', {operands: [this.numberInput1, this.numberInput2], result: 3});
          });
        });
    });
})();

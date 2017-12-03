describe('LearnJS', () => {
    it('can show a pogram', () => {
        learnjs.showView('#problem-1');
        expect($('.view-container .problem-view').length).toEqual(1);
    });
});
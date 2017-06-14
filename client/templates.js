Template.showpeople.helpers({
  peoplelist() {return People.find()},
})

Template.addperson.events({
  'click button'(element, instance) {
    const name = instance.$('#nombre').val();
    const year = instance.$('#cumpleanos').val();
    const birthyear = parseInt(year);
    console.log('adding ' + name);
    instance.$('#nombre').val("");
    instance.$('#cumpleanos').val("");
    People.insert({name:name, birthyear:birthyear})
    //People.insert({name,birthyear}) <--- This is how people really do it
  }
})

Template.personrow.events({
  'click span'(element, instance) {
    console.dir(this);
    console.log(this.person._id);
    People.remove(this.person._id);
  }
})

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Subjects = ({ navigation }) => {
  const [selectedSubject, setSelectedSubject] = React.useState(null);

  const subjects = [
    { id: 1, subjectName: 'ÁLGEBRA' },
    { id: 2, subjectName: 'BIOLOGIA' },
    { id: 3, subjectName: 'FÍSICA' },
    { id: 4, subjectName: 'GEOGRAFIA' },
    { id: 5, subjectName: 'GEOMETRIA' },
    { id: 6, subjectName: 'GRAMÁTICA' },
    { id: 7, subjectName: 'HISTÓRIA' },
    { id: 8, subjectName: 'INGLÊS' },
    { id: 9, subjectName: 'LITERATURA' },
    { id: 10, subjectName: 'QUÍMICA' },
  ];

  const handleSubjectPress = (subjectName) => {
    setSelectedSubject(subjectName === selectedSubject ? null : subjectName);
  };

  const renderSubjects = () => {
    return subjects.map((subject) => (
      <TouchableOpacity
        key={subject.id}
        onPress={() => handleSubjectPress(subject.subjectName)}
        style={[styles.button, subject.subjectName === selectedSubject ? styles.selectedButton : null]}
      >
        <View style={[styles.marker, subject.subjectName === selectedSubject ? styles.selectedMarker : null]} />
        <Text style={styles.buttonText}>{subject.subjectName}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>DISCIPLINAS</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.subjectsContainer}>
          {renderSubjects()}
        </View>
        <View style={styles.nextButtonContainer}>
          <TouchableOpacity
            style={[
              styles.nextButton,
              selectedSubject ? styles.nextButtonEnabled : styles.nextButtonDisabled,
            ]}
            disabled={!selectedSubject}
            onPress={() => navigation.navigate('Students', { selectedSubject })}
          >
            <Text style={styles.nextbuttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    height: 80,
    backgroundColor: '#375de3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    padding: 20,
    alignItems: 'flex-start',
  },
  subjectsContainer: {
    alignItems: 'flex-start',
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#483D8B',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    width: '100%',
  },
  selectedButton: {
    backgroundColor: '#6A5ACD',
  },
  marker: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFF',
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#483D8B',
  },
  selectedMarker: {
    backgroundColor: '#483D8B',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
  },
  nextbuttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
  },
  nextButtonContainer: {
    alignItems: 'center',
    width: '100%',
  },
  nextButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#375de3',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    width: '50%',
  },
  nextButtonEnabled: {
    opacity: 1,
  },
  nextButtonDisabled: {
    opacity: 0.5,
  },

});

export default Subjects;

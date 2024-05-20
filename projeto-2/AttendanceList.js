import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Vibration } from 'react-native';
import Toast from 'react-native-toast-message';
import firebase from './config/config'; // Certifique-se de que o caminho esteja correto

const AttendanceList = ({ navigation, route }) => {
  const { selectedSubject } = route.params; // Receber a disciplina selecionada
  const [presentStudents, setPresentStudents] = React.useState([]);

  const students = [
    { id: '1', name: 'Amanda Silva Martins' },
    { id: '2', name: 'Ana Clara Gentile Dantas' },
    { id: '3', name: 'Ana Júlia Barbosa de Oliveira' },
    { id: '4', name: 'Ana Paula Mendes Ferreira' },
    { id: '5', name: 'Arthur Henrique Botelho' },
    { id: '6', name: 'Beatriz de Araujo Balaton' },
    { id: '7', name: 'Beatriz Esthefany Correia Barbosa' },
    // Adicione mais alunos aqui se necessário
  ];

  const toggleStudentAttendance = (studentId) => {
    const index = presentStudents.indexOf(studentId);
    if (index === -1) {
      setPresentStudents([...presentStudents, studentId]);
    } else {
      setPresentStudents(presentStudents.filter(id => id !== studentId));
    }
  };

  const handleSave = async () => {
    Vibration.vibrate();
    try {
      const attendanceRef = firebase.database().ref('/attendance');
      await attendanceRef.push({
        presentStudents,
        subject: selectedSubject, // Adicionar a disciplina selecionada
        timestamp: Date.now(),
      });
      Toast.show({
        type: 'success',
        text1: 'PRESENÇA REGISTRADA',
      });
      navigation.navigate('Menu');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao registrar presença',
      });
    }
  };

  const renderStudents = () => {
    return students.map((student) => (
      <TouchableOpacity
        key={student.id}
        onPress={() => toggleStudentAttendance(student.id)}
        style={[
          styles.button,
          presentStudents.includes(student.id) ? styles.selectedButton : null,
        ]}
      >
        <View style={[styles.marker, presentStudents.includes(student.id) ? styles.selectedMarker : null]} />
        <Text style={styles.buttonText}>{student.name}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>LISTA DE ALUNOS</Text>
        <Text style={styles.subjectText}>Disciplina: {selectedSubject}</Text> {/* Mostrar a disciplina selecionada */}
      </View>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.studentsContainer}>
          {renderStudents()}
        </View>
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    height: 100, // Aumentar a altura para acomodar o novo texto
    backgroundColor: '#375de3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subjectText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  scrollViewContent: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  studentsContainer: {
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
  },
  saveButtonContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#483D8B',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    width: '50%',
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AttendanceList;

import { Autocomplete, AutocompleteItem } from "@ui-kitten/components";
import { useCallback, useState } from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
const movies = [
  { title: "Star Wars" },
  { title: "Back to the Future" },
  { title: "The Matrix" },
  { title: "Inception" },
  { title: "Interstellar" },
];

const filter = (item: { title: string }, query: string): boolean =>
  item.title.toLowerCase().includes(query.toLowerCase());

export default function TabOneScreen() {
  const [data, setData] = useState(movies);
  const [value, setValue] = useState<string | undefined>(undefined);

  const onSelect = useCallback(
    (index: number): void => {
      setValue(data[index].title);
    },
    [data]
  );

  const onChangeText = useCallback((query: string): void => {
    setValue(query);
    setData(movies.filter((item) => filter(item, query)));
  }, []);

  const renderOption = useCallback(
    (item: { title: string }, index: number): React.ReactElement => (
      <AutocompleteItem
        key={index}
        title={item.title}
        style={styles.renderOption}
      />
    ),
    []
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marka Ara</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Autocomplete
        placeholder="Place your Text"
        value={value}
        size="large"
        status="warning"
        placement="inner top"
        onSelect={onSelect}
        onChangeText={onChangeText}
        style={styles.autoComplete}
      >
        {data.map(renderOption)}
      </Autocomplete>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginTop: 10,
    marginBottom: 15,
    height: 1,
    width: 200,
  },
  autoComplete: {
    width: 200,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 10,
  },
  renderOption: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    borderRightWidth: 1,
    borderRightColor: "#eee",
    borderLeftWidth: 1,
    borderLeftColor: "#eee",
  },
});

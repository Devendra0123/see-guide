/** @format */

import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { assets, FONTS } from "../constants";
import BottomTab from "../components/BottomTab";
import background from "../assets/images/bg7.jpg";
import FocusedStatusBar from "../components/FocusedStatusBar";

const Membership = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor='#827397' />
      <ScrollView>
        <View style={{ flex: 1, padding: 10, alignItems: "center" }}>
          <View
            style={{
              alignSelf: "center",
              padding: 10,
              backgroundColor: "white",
              marginVertical: 20,
              transform: [{ rotateX: "15deg" }, { rotateY: "15deg" }],
            }}>
            <Text style={{ textAlign: "center", fontFamily: FONTS.quicksand }}>
              MEMBERSHIP
            </Text>
          </View>

          <View
            style={{
              width: "95%",
              alignItems: "center",
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
              boxShadow: "2px 2px 15px grey",
              marginBottom: 20,
            }}>
            <View
              style={{
                width: "95%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 10,
              }}>
              <Image
                source={assets.party}
                reszeMode='contain'
                style={{ width: 35, height: 35 }}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontFamily: FONTS.rancho, fontSize: 18 }}>
                  General
                </Text>
                <Text style={{ fontFamily: FONTS.rancho, fontSize: 18 }}>
                  Membership
                </Text>
              </View>
              <Text style={{ color: "orange", fontSize: 17 }}>Rs.100</Text>
            </View>
            <View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}>
                <Image
                  source={assets.tick}
                  resizeMode='contain'
                  style={{ width: 30, height: 30, marginRight: 10 }}
                />
                <Text style={{ fontFamily: FONTS.poppins }}>Notes</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}>
                <Image
                  source={assets.tick}
                  resizeMode='contain'
                  style={{ width: 30, height: 30, marginRight: 10 }}
                />
                <Text style={{ fontFamily: FONTS.poppins }}>
                  Revision Notes
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}>
                <Image
                  source={assets.tick}
                  resizeMode='contain'
                  style={{ width: 30, height: 30, marginRight: 10 }}
                />
                <Text style={{ fontFamily: FONTS.poppins }}>
                  Video Lectures
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}>
                <Image
                  source={assets.tick}
                  resizeMode='contain'
                  style={{ width: 30, height: 30, marginRight: 10 }}
                />
                <Text style={{ fontFamily: FONTS.poppins }}>
                  Test Your Knnowledge
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}>
                <Image
                  source={assets.tick}
                  resizeMode='contain'
                  style={{ width: 30, height: 30, marginRight: 10 }}
                />
                <Text style={{ fontFamily: FONTS.poppins }}>
                  Important Questions & Answers
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}>
                <Image
                  source={assets.tick}
                  resizeMode='contain'
                  style={{ width: 30, height: 30, marginRight: 10 }}
                />
                <Text style={{ fontFamily: FONTS.poppins }}>
                  Past Questions & Answers
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "orange",
                padding: 15,
                borderRadius: 25,
              }}>
              <Text style={{ color: "white" }}>Buy Membership</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "95%",
              alignItems: "center",
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
              boxShadow: "2px 2px 15px grey",
              marginBottom: 20,
            }}>
            <View
              style={{
                width: "95%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 10,
              }}>
              <Image
                source={assets.party}
                reszeMode='contain'
                style={{ width: 35, height: 35 }}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontFamily: FONTS.rancho, fontSize: 18 }}>
                  Tuition
                </Text>
                <Text style={{ fontFamily: FONTS.rancho, fontSize: 18 }}>
                  Membership
                </Text>
              </View>
              <Text style={{ color: "orange", fontSize: 17 }}>Rs.100</Text>
            </View>
            <View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}>
                <Image
                  source={assets.tick}
                  resizeMode='contain'
                  style={{ width: 30, height: 30, marginRight: 10 }}
                />
                <Text style={{ fontFamily: FONTS.poppins }}>
                  Online Tuition Classes
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}>
                <Image
                  source={assets.tick}
                  resizeMode='contain'
                  style={{ width: 30, height: 30, marginRight: 10 }}
                />
                <Text style={{ fontFamily: FONTS.poppins }}>Notes</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}>
                <Image
                  source={assets.tick}
                  resizeMode='contain'
                  style={{ width: 30, height: 30, marginRight: 10 }}
                />
                <Text style={{ fontFamily: FONTS.poppins }}>
                  Revision Notes
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}>
                <Image
                  source={assets.tick}
                  resizeMode='contain'
                  style={{ width: 30, height: 30, marginRight: 10 }}
                />
                <Text style={{ fontFamily: FONTS.poppins }}>
                  Video Lectures
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}>
                <Image
                  source={assets.tick}
                  resizeMode='contain'
                  style={{ width: 30, height: 30, marginRight: 10 }}
                />
                <Text style={{ fontFamily: FONTS.poppins }}>
                  Test Your Knnowledge
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}>
                <Image
                  source={assets.tick}
                  resizeMode='contain'
                  style={{ width: 30, height: 30, marginRight: 10 }}
                />
                <Text style={{ fontFamily: FONTS.poppins }}>
                  Important Questions & Answers
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}>
                <Image
                  source={assets.tick}
                  resizeMode='contain'
                  style={{ width: 30, height: 30, marginRight: 10 }}
                />
                <Text style={{ fontFamily: FONTS.poppins }}>
                  Past Questions & Answers
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "orange",
                padding: 15,
                borderRadius: 25,
              }}>
              <Text style={{ color: "white" }}>Buy Membership</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <BottomTab navigation={navigation} />

      <View
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
          zIndex: -1,
          opacity: 0.9,
        }}>
        <Image
          resizeMode='cover'
          source={background}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Membership;

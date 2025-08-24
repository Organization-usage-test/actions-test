import { render, screen, userEvent } from '@testing-library/react-native';
import App from '../App';

describe('Math Ops works correctly', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('Screen Displays all operable elements', () => {
    expect(screen.getByTestId('operator1')).toBeVisible();
    expect(screen.getByTestId('operator2')).toBeVisible();
    expect(screen.getByTestId('triggerSum')).toBeVisible();
    expect(screen.getByTestId('triggerDivision')).toBeVisible();

    //  const user = userEvent.setup()

    //  await user.type(screen.getByTestId("operator1"), )
  });

  test('sum operates correctly', async () => {
    const user = userEvent.setup();

    await user.type(screen.getByTestId('operator1'), '99');
    await user.type(screen.getByTestId('operator2'), '123');
    await user.press(screen.getByTestId('triggerSum'));
    expect(screen.getByText('222')).toBeVisible();

    await user.clear(screen.getByTestId('operator1'));
    await user.clear(screen.getByTestId('operator2'));
    await user.type(screen.getByTestId('operator1'), '0');
    await user.type(screen.getByTestId('operator2'), '123');
    await user.press(screen.getByTestId('triggerSum'));
    expect(screen.getByText('123')).toBeVisible();

    await user.clear(screen.getByTestId('operator1'));
    await user.clear(screen.getByTestId('operator2'));
    await user.type(screen.getByTestId('operator1'), '500500.');
    await user.type(screen.getByTestId('operator1'), 'a');
    await user.type(screen.getByTestId('operator2'), '500');

    const valor = screen.getByTestId('operator1');
    expect(valor.props.value).toBe('500500.0');

    await user.press(screen.getByTestId('triggerSum'));
    expect(screen.getByText('501000')).toBeVisible();
  });

  test('division operates correctly', async () => {
    const user = userEvent.setup();

    await user.type(screen.getByTestId('operator1'), '99');
    await user.type(screen.getByTestId('operator2'), '2');
    await user.press(screen.getByTestId('triggerDivision'));
    expect(screen.getByText('49.5')).toBeVisible();

    await user.clear(screen.getByTestId('operator1'));
    await user.clear(screen.getByTestId('operator2'));
    await user.type(screen.getByTestId('operator1'), '99');
    await user.type(screen.getByTestId('operator2'), '0');
    await user.press(screen.getByTestId('triggerDivision'));
    expect(screen.getByText('-err-')).toBeVisible();
  });

  test('snapshot is correctly kept', () => {
    const serializedApp = screen.toJSON();
    expect(serializedApp).toMatchInlineSnapshot(`
      <RNCSafeAreaView
        edges={
          {
            "bottom": "additive",
            "left": "additive",
            "right": "additive",
            "top": "additive",
          }
        }
        style={
          {
            "alignItems": "center",
            "borderColor": "red",
            "flex": 1,
            "gap": 40,
            "justifyContent": "center",
          }
        }
      >
        <View
          style={
            [
              {
                "backgroundColor": "rgba(231, 224, 236, 1)",
                "borderTopLeftRadius": 4,
                "borderTopRightRadius": 4,
              },
              {
                "width": "80%",
              },
            ]
          }
        >
          <View
            collapsable={false}
            style={
              {
                "backgroundColor": "rgba(73, 69, 79, 1)",
                "bottom": 0,
                "height": 1,
                "left": 0,
                "position": "absolute",
                "right": 0,
                "transform": [
                  {
                    "scaleY": 0.5,
                  },
                ],
                "zIndex": 1,
              }
            }
            testID="text-input-underline"
          />
          <View
            onLayout={[Function]}
            style={
              [
                {
                  "flexGrow": 1,
                  "paddingBottom": 0,
                  "paddingTop": 0,
                },
                {
                  "minHeight": 56,
                },
              ]
            }
          >
            <View
              pointerEvents="none"
              style={
                [
                  {
                    "bottom": 0,
                    "left": 0,
                    "position": "absolute",
                    "right": 0,
                    "top": 0,
                  },
                  {
                    "overflow": "hidden",
                  },
                  {
                    "zIndex": 3,
                  },
                ]
              }
            >
              <View
                collapsable={false}
                pointerEvents="none"
                style={
                  {
                    "bottom": 0,
                    "left": 0,
                    "opacity": 1,
                    "position": "absolute",
                    "right": 0,
                    "top": 0,
                    "transform": [
                      {
                        "translateX": 0,
                      },
                    ],
                    "width": 750,
                  }
                }
              >
                <View
                  style={
                    {
                      "width": 73,
                    }
                  }
                >
                  <Text
                    collapsable={false}
                    maxFontSizeMultiplier={1.5}
                    numberOfLines={1}
                    onLayout={[Function]}
                    onTextLayout={[Function]}
                    style={
                      {
                        "color": "rgba(103, 80, 164, 1)",
                        "fontFamily": "System",
                        "fontSize": 16,
                        "fontWeight": undefined,
                        "left": 0,
                        "letterSpacing": 0.15,
                        "lineHeight": undefined,
                        "maxWidth": 73,
                        "opacity": 0,
                        "paddingLeft": 16,
                        "paddingRight": 16,
                        "position": "absolute",
                        "textAlign": "left",
                        "top": 30,
                        "transform": [
                          {
                            "translateX": 0,
                          },
                          {
                            "translateY": 0,
                          },
                          {
                            "scale": 1,
                          },
                        ],
                        "writingDirection": "ltr",
                      }
                    }
                    testID="operator1-label-active"
                  >
                    Operador 1
                  </Text>
                  <Text
                    collapsable={false}
                    maxFontSizeMultiplier={1.5}
                    numberOfLines={1}
                    style={
                      {
                        "color": "rgba(73, 69, 79, 1)",
                        "fontFamily": "System",
                        "fontSize": 16,
                        "fontWeight": undefined,
                        "left": 0,
                        "letterSpacing": 0.15,
                        "lineHeight": undefined,
                        "maxWidth": 73,
                        "opacity": 0,
                        "paddingLeft": 16,
                        "paddingRight": 16,
                        "position": "absolute",
                        "textAlign": "left",
                        "top": 30,
                        "transform": [
                          {
                            "translateX": 0,
                          },
                          {
                            "translateY": 0,
                          },
                          {
                            "scale": 1,
                          },
                        ],
                        "writingDirection": "ltr",
                      }
                    }
                    testID="operator1-label-inactive"
                  >
                    Operador 1
                  </Text>
                </View>
              </View>
            </View>
            <TextInput
              cursorColor="rgba(103, 80, 164, 1)"
              editable={true}
              maxFontSizeMultiplier={1.5}
              multiline={false}
              onBlur={[Function]}
              onChangeText={[Function]}
              onFocus={[Function]}
              placeholderTextColor="transparent"
              selectionColor="rgba(103, 80, 164, 1)"
              style={
                [
                  {
                    "flexGrow": 1,
                    "margin": 0,
                  },
                  {},
                  {
                    "paddingBottom": 4,
                    "paddingTop": 24,
                  },
                  {
                    "color": "rgba(28, 27, 31, 1)",
                    "fontFamily": "System",
                    "fontSize": 16,
                    "fontWeight": undefined,
                    "letterSpacing": 0.15,
                    "lineHeight": undefined,
                    "minWidth": 65,
                    "paddingLeft": 16,
                    "paddingRight": 16,
                    "textAlign": "left",
                    "textAlignVertical": "center",
                  },
                  undefined,
                  [
                    {},
                  ],
                  undefined,
                ]
              }
              testID="operator1"
              underlineColorAndroid="transparent"
              value=""
            />
          </View>
        </View>
        <View
          style={
            [
              {
                "backgroundColor": "rgba(231, 224, 236, 1)",
                "borderTopLeftRadius": 4,
                "borderTopRightRadius": 4,
              },
              {
                "width": "80%",
              },
            ]
          }
        >
          <View
            collapsable={false}
            style={
              {
                "backgroundColor": "rgba(73, 69, 79, 1)",
                "bottom": 0,
                "height": 1,
                "left": 0,
                "position": "absolute",
                "right": 0,
                "transform": [
                  {
                    "scaleY": 0.5,
                  },
                ],
                "zIndex": 1,
              }
            }
            testID="text-input-underline"
          />
          <View
            onLayout={[Function]}
            style={
              [
                {
                  "flexGrow": 1,
                  "paddingBottom": 0,
                  "paddingTop": 0,
                },
                {
                  "minHeight": 56,
                },
              ]
            }
          >
            <View
              pointerEvents="none"
              style={
                [
                  {
                    "bottom": 0,
                    "left": 0,
                    "position": "absolute",
                    "right": 0,
                    "top": 0,
                  },
                  {
                    "overflow": "hidden",
                  },
                  {
                    "zIndex": 3,
                  },
                ]
              }
            >
              <View
                collapsable={false}
                pointerEvents="none"
                style={
                  {
                    "bottom": 0,
                    "left": 0,
                    "opacity": 1,
                    "position": "absolute",
                    "right": 0,
                    "top": 0,
                    "transform": [
                      {
                        "translateX": 0,
                      },
                    ],
                    "width": 750,
                  }
                }
              >
                <View
                  style={
                    {
                      "width": 73,
                    }
                  }
                >
                  <Text
                    collapsable={false}
                    maxFontSizeMultiplier={1.5}
                    numberOfLines={1}
                    onLayout={[Function]}
                    onTextLayout={[Function]}
                    style={
                      {
                        "color": "rgba(103, 80, 164, 1)",
                        "fontFamily": "System",
                        "fontSize": 16,
                        "fontWeight": undefined,
                        "left": 0,
                        "letterSpacing": 0.15,
                        "lineHeight": undefined,
                        "maxWidth": 73,
                        "opacity": 0,
                        "paddingLeft": 16,
                        "paddingRight": 16,
                        "position": "absolute",
                        "textAlign": "left",
                        "top": 30,
                        "transform": [
                          {
                            "translateX": 0,
                          },
                          {
                            "translateY": 0,
                          },
                          {
                            "scale": 1,
                          },
                        ],
                        "writingDirection": "ltr",
                      }
                    }
                    testID="operator2-label-active"
                  >
                    Operador 2
                  </Text>
                  <Text
                    collapsable={false}
                    maxFontSizeMultiplier={1.5}
                    numberOfLines={1}
                    style={
                      {
                        "color": "rgba(73, 69, 79, 1)",
                        "fontFamily": "System",
                        "fontSize": 16,
                        "fontWeight": undefined,
                        "left": 0,
                        "letterSpacing": 0.15,
                        "lineHeight": undefined,
                        "maxWidth": 73,
                        "opacity": 0,
                        "paddingLeft": 16,
                        "paddingRight": 16,
                        "position": "absolute",
                        "textAlign": "left",
                        "top": 30,
                        "transform": [
                          {
                            "translateX": 0,
                          },
                          {
                            "translateY": 0,
                          },
                          {
                            "scale": 1,
                          },
                        ],
                        "writingDirection": "ltr",
                      }
                    }
                    testID="operator2-label-inactive"
                  >
                    Operador 2
                  </Text>
                </View>
              </View>
            </View>
            <TextInput
              cursorColor="rgba(103, 80, 164, 1)"
              editable={true}
              maxFontSizeMultiplier={1.5}
              multiline={false}
              onBlur={[Function]}
              onChangeText={[Function]}
              onFocus={[Function]}
              placeholderTextColor="transparent"
              selectionColor="rgba(103, 80, 164, 1)"
              style={
                [
                  {
                    "flexGrow": 1,
                    "margin": 0,
                  },
                  {},
                  {
                    "paddingBottom": 4,
                    "paddingTop": 24,
                  },
                  {
                    "color": "rgba(28, 27, 31, 1)",
                    "fontFamily": "System",
                    "fontSize": 16,
                    "fontWeight": undefined,
                    "letterSpacing": 0.15,
                    "lineHeight": undefined,
                    "minWidth": 65,
                    "paddingLeft": 16,
                    "paddingRight": 16,
                    "textAlign": "left",
                    "textAlignVertical": "center",
                  },
                  undefined,
                  [
                    {},
                  ],
                  undefined,
                ]
              }
              testID="operator2"
              underlineColorAndroid="transparent"
              value=""
            />
          </View>
        </View>
        <View
          collapsable={false}
          style={
            {
              "backgroundColor": "rgba(103, 80, 164, 1)",
              "borderRadius": 10,
              "shadowColor": "#000",
              "shadowOffset": {
                "height": 0,
                "width": 0,
              },
              "shadowOpacity": 0,
              "shadowRadius": 0,
              "width": "80%",
            }
          }
          testID="triggerDivision-container-outer-layer"
        >
          <View
            collapsable={false}
            style={
              {
                "backgroundColor": "rgba(103, 80, 164, 1)",
                "borderColor": "transparent",
                "borderRadius": 10,
                "borderStyle": "solid",
                "borderWidth": 0,
                "flex": undefined,
                "minWidth": 64,
                "shadowColor": "#000",
                "shadowOffset": {
                  "height": 0,
                  "width": 0,
                },
                "shadowOpacity": 0,
                "shadowRadius": 0,
              }
            }
            testID="triggerDivision-container"
          >
            <View
              accessibilityRole="button"
              accessibilityState={
                {
                  "busy": undefined,
                  "checked": undefined,
                  "disabled": false,
                  "expanded": undefined,
                  "selected": undefined,
                }
              }
              accessibilityValue={
                {
                  "max": undefined,
                  "min": undefined,
                  "now": undefined,
                  "text": undefined,
                }
              }
              accessible={true}
              collapsable={false}
              focusable={true}
              onBlur={[Function]}
              onClick={[Function]}
              onFocus={[Function]}
              onResponderGrant={[Function]}
              onResponderMove={[Function]}
              onResponderRelease={[Function]}
              onResponderTerminate={[Function]}
              onResponderTerminationRequest={[Function]}
              onStartShouldSetResponder={[Function]}
              style={
                [
                  {
                    "overflow": "hidden",
                  },
                  {
                    "borderRadius": 10,
                  },
                ]
              }
              testID="triggerDivision"
            >
              <View
                style={
                  [
                    {
                      "alignItems": "center",
                      "flexDirection": "row",
                      "justifyContent": "center",
                    },
                    undefined,
                  ]
                }
              >
                <View
                  style={
                    [
                      {
                        "marginLeft": 12,
                        "marginRight": -4,
                      },
                      {
                        "marginLeft": 16,
                        "marginRight": -16,
                      },
                      false,
                    ]
                  }
                  testID="triggerDivision-icon-container"
                >
                  <icon
                    accessibilityElementsHidden={true}
                    color="rgba(255, 255, 255, 1)"
                    importantForAccessibility="no-hide-descendants"
                    name="slash-forward"
                    pointerEvents="none"
                    selectable={false}
                    size={18}
                    style={
                      [
                        {
                          "lineHeight": 18,
                          "transform": [
                            {
                              "scaleX": 1,
                            },
                          ],
                        },
                        {
                          "backgroundColor": "transparent",
                        },
                      ]
                    }
                  />
                </View>
                <Text
                  numberOfLines={1}
                  selectable={false}
                  style={
                    [
                      {
                        "textAlign": "left",
                      },
                      {
                        "color": "rgba(28, 27, 31, 1)",
                        "writingDirection": "ltr",
                      },
                      [
                        {
                          "fontFamily": "System",
                          "fontSize": 14,
                          "fontWeight": "500",
                          "letterSpacing": 0.1,
                          "lineHeight": 20,
                        },
                        [
                          {
                            "marginHorizontal": 16,
                            "marginVertical": 9,
                            "textAlign": "center",
                          },
                          false,
                          {
                            "marginHorizontal": 24,
                            "marginVertical": 10,
                          },
                          undefined,
                          false,
                          {
                            "color": "rgba(255, 255, 255, 1)",
                            "fontFamily": "System",
                            "fontSize": 14,
                            "fontWeight": "500",
                            "letterSpacing": 0.1,
                            "lineHeight": 20,
                          },
                          undefined,
                        ],
                      ],
                    ]
                  }
                  testID="triggerDivision-text"
                >
                  Dividir
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          collapsable={false}
          style={
            {
              "backgroundColor": "rgba(103, 80, 164, 1)",
              "borderRadius": 10,
              "shadowColor": "#000",
              "shadowOffset": {
                "height": 0,
                "width": 0,
              },
              "shadowOpacity": 0,
              "shadowRadius": 0,
              "width": "80%",
            }
          }
          testID="triggerSum-container-outer-layer"
        >
          <View
            collapsable={false}
            style={
              {
                "backgroundColor": "rgba(103, 80, 164, 1)",
                "borderColor": "transparent",
                "borderRadius": 10,
                "borderStyle": "solid",
                "borderWidth": 0,
                "flex": undefined,
                "minWidth": 64,
                "shadowColor": "#000",
                "shadowOffset": {
                  "height": 0,
                  "width": 0,
                },
                "shadowOpacity": 0,
                "shadowRadius": 0,
              }
            }
            testID="triggerSum-container"
          >
            <View
              accessibilityRole="button"
              accessibilityState={
                {
                  "busy": undefined,
                  "checked": undefined,
                  "disabled": false,
                  "expanded": undefined,
                  "selected": undefined,
                }
              }
              accessibilityValue={
                {
                  "max": undefined,
                  "min": undefined,
                  "now": undefined,
                  "text": undefined,
                }
              }
              accessible={true}
              collapsable={false}
              focusable={true}
              onBlur={[Function]}
              onClick={[Function]}
              onFocus={[Function]}
              onResponderGrant={[Function]}
              onResponderMove={[Function]}
              onResponderRelease={[Function]}
              onResponderTerminate={[Function]}
              onResponderTerminationRequest={[Function]}
              onStartShouldSetResponder={[Function]}
              style={
                [
                  {
                    "overflow": "hidden",
                  },
                  {
                    "borderRadius": 10,
                  },
                ]
              }
              testID="triggerSum"
            >
              <View
                style={
                  [
                    {
                      "alignItems": "center",
                      "flexDirection": "row",
                      "justifyContent": "center",
                    },
                    undefined,
                  ]
                }
              >
                <View
                  style={
                    [
                      {
                        "marginLeft": 12,
                        "marginRight": -4,
                      },
                      {
                        "marginLeft": 16,
                        "marginRight": -16,
                      },
                      false,
                    ]
                  }
                  testID="triggerSum-icon-container"
                >
                  <icon
                    accessibilityElementsHidden={true}
                    color="rgba(255, 255, 255, 1)"
                    importantForAccessibility="no-hide-descendants"
                    name="plus"
                    pointerEvents="none"
                    selectable={false}
                    size={18}
                    style={
                      [
                        {
                          "lineHeight": 18,
                          "transform": [
                            {
                              "scaleX": 1,
                            },
                          ],
                        },
                        {
                          "backgroundColor": "transparent",
                        },
                      ]
                    }
                  />
                </View>
                <Text
                  numberOfLines={1}
                  selectable={false}
                  style={
                    [
                      {
                        "textAlign": "left",
                      },
                      {
                        "color": "rgba(28, 27, 31, 1)",
                        "writingDirection": "ltr",
                      },
                      [
                        {
                          "fontFamily": "System",
                          "fontSize": 14,
                          "fontWeight": "500",
                          "letterSpacing": 0.1,
                          "lineHeight": 20,
                        },
                        [
                          {
                            "marginHorizontal": 16,
                            "marginVertical": 9,
                            "textAlign": "center",
                          },
                          false,
                          {
                            "marginHorizontal": 24,
                            "marginVertical": 10,
                          },
                          undefined,
                          false,
                          {
                            "color": "rgba(255, 255, 255, 1)",
                            "fontFamily": "System",
                            "fontSize": 14,
                            "fontWeight": "500",
                            "letterSpacing": 0.1,
                            "lineHeight": 20,
                          },
                          undefined,
                        ],
                      ],
                    ]
                  }
                  testID="triggerSum-text"
                >
                  Sumar
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={
            {
              "alignItems": "center",
              "backgroundColor": "orange",
              "borderRadius": 10,
              "height": 50,
              "justifyContent": "center",
              "width": "80%",
            }
          }
        >
          <Text
            style={
              [
                {
                  "textAlign": "left",
                },
                {
                  "color": "rgba(28, 27, 31, 1)",
                  "writingDirection": "ltr",
                },
                [
                  {
                    "fontFamily": "System",
                    "fontSize": 24,
                    "fontWeight": "400",
                    "letterSpacing": 0,
                    "lineHeight": 32,
                  },
                  undefined,
                ],
              ]
            }
          />
        </View>
      </RNCSafeAreaView>
    `);
  });
});

# Groups Anagrams

## Problem Statement

Implement a function called groupAnagrams that takes in an array of strings and groups them into anagrams. Anagrams are words or phrases formed by rearranging the letters of another word or phrase. The function should return a list of lists, where each inner list represents a group of anagrams.

## Example

Input: ["cat", "dog", "tac", "god", "act", "good"]

Output: [["cat", "tac", "act"], ["dog", "god"], ["good"]]

## Requirements

    The function should group the anagrams together while preserving the order of the original words.
    The input array can contain words of varying lengths, including empty strings.
    The function should have a time complexity of O(n * m * log m), where n is the length of the input array and m is the maximum length of a word in the array.
    You can assume that the input array will only contain lowercase alphabets.

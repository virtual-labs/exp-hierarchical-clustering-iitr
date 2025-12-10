#### **Agglomerative Clustering**

##### **Single Linkage**
1. Calculate the Euclidean distance for the highlighted cell using the provided calculator (take X₁ & X₂ from the table). Next, click on the corresponding cell in the matrix and enter the calculated distance.
2. Repeat the step 1 until you've completed the matrix. (Mirrored values will be automatically filled)
3. Identify the two clusters with the smallest maximum pairwise distance by clicking on the MIN button.
4. Click the **MERGE** button to combine the two clusters from step 3 into a single cluster & update the matrix by recalculating pairwise distances, considering the single linkage criterion
5. Repeat step 3-4 until only one cluster remains.
6. Now, click on the **NEXT** button to plot the dendrogram.
7. Finally, click on the **PLOT** button.

##### **Complete Linkage**
1. Enter a value for each attribute in the **ATTRIBUTES** section and then click the **SUBMIT** button to incorporate the values into the table.
2. Repeat the above step until you've completed this process for 5 rows.
3. Click on the **NEXT** button to navigate to the **COMPUTE** page.
4. Calculate the Euclidean distance for the highlighted cell using the provided calculator (take X & Y from the table). Next, click on the corresponding cell in the matrix and enter the calculated distance.
5. Repeat the step 4 until you've completed the matrix. (Mirrored values will be automatically filled)
6. Find the minimum element in distance matrix by clicking on the **MIN** button.
7. Now, click on the **MERGE** button. This will form clusters of elements corresponding to the minimum value and update the matrix by recalculating pairwise distances, considering the complete linkage criterion.
8. Repeat step 6-7 until only one cluster remains.
9. Now, click on the **NEXT** button to plot the dendrogram.
10. Finally, click on the **PLOT** button.


#### **Divisive Clustering**
1. Select the number of nodes for your graph and click on the **SUBMIT** button.
    <ol type="i">
    <li>If nodes equal 4, follow the below steps:
        <ul>
            <b>Create the complete graph by adding edges between every pair of nodes.</b>
            <li>Enter the values for the source node, destination node, and the weight/cost of the edge. Click on the <b>SUBMIT</b> button.</li>
            <li>Repeat the above step until you have added edges between every pair of nodes.</li>
            <li>Finally, click on the <b>NEXT</b> button to initiate the computation phase for the divisive algorithm.</li>
            <li>Now, jump to step 2.</li>
        </ul>
    </li>

    <li>If nodes equal 5, follow the below steps:
        <ul>
            <li>Click on the <b>START</b> button.</li>
            <li>Now, click on the highlighted cell of the table (EDGE-COST) and enter the required value in the pop-up box.</li>
            <li>Repeat the above step for every cell of the table.</li>
            <li>Now, jump to step 2.</li>
        </ul>
    </li>
    </ol>

2. Compute the Minimum Spanning Tree (MST) using **Kruskal's algo**. for the given adjacency matrix by clicking on the **DRAW MST** button.
3. Enter the edge name from the sorted list of edge For example, 1-2 and then repeat this step until the MST is created.
4. Progress to the next step by clicking on the **NEXT** button to identify "Singleton Clusters".
5. Form a new cluster by breaking the link associated with the highest cost. Click on the **BREAK** button to proceed.
6. Click on the **NEXT** button to navigate to the CLUSTERS page.

